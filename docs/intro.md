---
sidebar_position: 1
---

# Huracan - The Sui Object Indexing Platform

Welcome to Huracan! Our platform provides you with a ready-to-use indexer for Sui development. We have already processed and enriched all the data, making it easily accessible through a simple and powerful GraphQL API.

With Huracan, you can skip the lengthy development process and instantly start querying the data you need. Say goodbye to complex setup and save valuable time with our user-friendly solution.

## Why Another Indexer?
The Sui Core RPC and Indexing APIs server Sui Objects as raw BCS. Therefore, it is not possible to run queries on objects using field-level data. Huracan allows developers to query Sui Objects using the fields inside the objects for filters, aggregrations, sorting, etc.

## Architecture
- A custom Rust app extracts Sui Object data via RPC invocations and writes them to MongoDB. To facilitate resiliency during indexing, this app also uses Apache Puslar and RocksDB to track indexing operations between threads, and handle crashes or other failures.
- A second custom Rust app serves the Sui Object data via GraphQL by reading directly from MongoDB. It does not perform any write operations.

## Extraction Implementation Overview
Data is extracted by loading checkpoints. Each checkpoint contains multiple transactions. Each transaction may contain object updates - new objects, deleted objects, or updated objects. We leverage Tokio to concurrently extract this data in multiple threads.

### Initialization Overview
Upon initialization, the app does several things:
1. Connect to MongoDB and determine the last checkpoint it has read. If this is the first run, it will begin at the newest checkpoint and work toward the oldest checkpoint.
2. Connect to one or more RPC servers, each of which is used round-robin for RPC calls.
3. Create Tokio threads to handle concurrent RPC calls for each checkpoint.
4. Create a RocksDB database file, which maintains state for each Tokio thread. Because each checkpoint contains multiple transactions, and each transaction contains multiple object changes, we use multiple Tokio threads to handle each checkpoint. RocksDB is the persistent storage layer to allow several Tokio threads to determine which checkpoints and transactions have been processed.
5. Create a log file (if configured to do so). Otherwise, logs go to stdout.
6. Create Tokio channels and workers. Each step of the pipeline relies on Tokio channels to manage data and facilitate backpressure. 
7. Create Pulsar topics. Each thread has its own Pulsar topic. The thread will only write to Pulsar when it fails to extract data via RPC.

### Runtime Overview
Using RPC calls, the app polls for new checkpoints, fetches all transactions for each checkpoint, and then fetches all object changes for each transaction. There is a distinct Tokio channel called the 'control channel' which streams metadata about each stage of the data processing pipeline, ensuring integrity and that all transaction blocks and objects are ingested. It also tracks ingest latency.

#### Operation Modes
- livescan: This default mode polls for the latest checkpoint and gradually traverses backward.
- backfill: This mode is enabled automatically when livescan is lagging by a certain number of checkpoints. The threshold is configured as `backfillthreshold`. This will trigger many more Tokio threads to be opened for RPC calls and MongoDB CRUD operations. This can cause crashes if the system cannot handle the input. There are several options available to help tune the overall throughput.

The app will automatically detect when there are several checkpoints in the backlog to index. This effectively triggers a backfilling operation which launches more ingest threads. Because multiple workers could be ingesting the same data, the app maintains a list of in-flight object IDs as a key/value store in RocksDB. While transaction blocks are scanned, RocksDB queries are issued on each object ID, and skipped if there is a match. This ensures that only one Tokio worker is handling an object change and avoids duplicate CRUD operations to downstream systems.
#### Step 1 - Checkpoint and Transaction Block Crawling
Initialized in the `spawn_livescan()` function. Spawns one or more Tokio workers based on configuration option `livescan.workers.checkpoint`. When an un-indexed checkpoint is polled, the app paginates through all transaction blocks contained in the checkpoint.    
#### Step 2 - Fetch Complete Object Data
Because transaction blocks only contain object IDs for affected objects, additional RPC calls must be issued to fetch the complete object data. In livescan
#### Step 3 - CRUD Object Data to MongoDB
Sui Object updates are published to MongoDB. If MongoDB cannot handle the incoming operations, the app will crash and you will need to detune the pipeline settings. The Rust code seems to extract data more quickly than MongoDB can keep up, if the configuration is too aggressive. If you see random crashes, this is a likely cause.

### GraphQL Webserver
Sui Object data that is loaded into MongoDB with the Sui Object Indexer is accessible via a GraphQL API. You may also queries MongoDB directly, if you so choose. All fields in the objects - including nested fields - are accessible via GraphQL. Unlike the Sui Core RPC and Indexing APIs, which only store the BCS of Sui objects, you can filter, sort, and run other queries using the fields inside your Sui objects.
- Located in `server` directory of the repo.
- Example queries are located in `example-queries` folder of the repo.
- We strongly recommend creating indices on critical fields used in your queries to improve performance and cost optimization of MongoDB. Examples are included in `example-queries`.
- Cost reduction and query speed can be achieved by narrowing down the number of objects you load into MongoDB via the Sui Object Indexer. For example, if you are only working with data from one or a handful of Sui Move Packages, you can configure the indexer to exclusivley load those items. This is documented in `config.yaml` in the `main` directory.

## Demo App
You can get started with Huracan by first visiting our playgrounds for each of the environment of the Sui network. Check out the query examples in the next section and try them yourself.
- Mainnet - [https://mainnet.huracan.tech](https://mainnet.huracan.tech) - contains a sample of Mainnet data from May-June 2023.
