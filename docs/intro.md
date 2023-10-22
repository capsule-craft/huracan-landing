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

## Demo App
You can get started with Huracan by first visiting our playgrounds for each of the environment of the Sui network. Check out the query examples in the next section and try them yourself.
- Mainnet - [https://mainnet.huracan.tech](https://mainnet.huracan.tech) - contains a sample of Mainnet data from May-June 2023.
