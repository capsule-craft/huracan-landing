---
sidebar_position: 6
---
# Install and Deploy

## Prerequisites
1. MongoDB - We suggest MongoDB Atlas, but you may manage your own open source database instead.
2. InfluxDB - We suggest InfluxDB Cloud, but you may manage your own open source database instead.
3. Pulsar - We suggest StreamNative Cloud, but you may manage your own open source cluster instead.

## Configuration and Deployment
Default values are configured in `config.yaml` and can be overriden with environment variables. All values are well documented inside `config.yaml`.
Generally any config value in `config.yaml` can be overridden with an environment variable.
Nested values are separated by `_` and env variables should start with `APP_` to be considered.
Example:
`APP_MONGO_URI=mongodb+srv://username:password@sui-testnet.7b6tqsn.mongodb.net/?retryWrites=true&w=majority`

## Whitelisting and Blacklisting by Sui Move Package ID
- Cost reduction and query speed can be achieved by narrowing down the number of objects you load into MongoDB via the Sui Object Indexer. For example, if you are only working with data from one or a handful of Sui Move Packages, you can configure the indexer to exclusivley load those items. This is documented in `config.yaml`.
- You may alternatively blacklist package IDs rather than whitelist.

## Cargo Install on Ubuntu 20.04 LTS (The Hard Way)
1. Clone repo into directory of your choice.
2. Configure `config.yaml`. All parameters are documented inside the file.
3. Ensure `pulsar-credentials.json` is located in correct directory. Default is `/opt/pulsar-credentials.json`. If using StreamNative Cloud, you can generate and download this file in the web UI.
4. Create MongoDB user and database. These must match the parameters in `config.yaml`. This is done in the UI in MongoDB Atlas. If you are using MongoSH, there are example commands in `example-queries/mongodb/mongosh-setup-examples`.
5. Create InfluxDB bucket and token. This is done in the web UI whether you are using InfluxDB Cloud or a self-managed, open-source database.
6. Open the port for the GraphQL web service. `sudo ufw allow 8000`
8. Install indexer application: Move to the `main` directory of the repo and run `cargo install --path .` This will create a new executable called `indexer`. This can take a long time to build Sui dependencies.
9. Start indexer in background: `setsid indexer`
10. Install GraphQL webserver application: Move to the `server` directory of the repo and run `cargo install --path .`
11. Start GraphQL webserver in background: `setsid`

### Tips for Running on Ubuntu 20.04 LTS
- If you are only running the indexer and webserver, a fairly small server will suffice (4gb RAM + 4 CPU cores). You may need a larger server to facilitate a large number of queries or aggressive indexing settings.
- If you used `setsid` to launch the apps, you can use `htop` to see the process info.
- Logs are located at `/var/log/indexer.log`

## Fly.io running a Docker Container (The Easy Way)
- Fly is a hosting platform that automatically builds, deploys, and runs Docker containers. You can also manage secrets like API keys and databse credentials in Fly.io. We have been able to host each Rust app on Fly for around $25 / month each.
- Note that you will still need to use external services for items in the `Prerequisites` section of this document.
- Each repo `main` (Indexer) and `server` (GraphQL API) contain an example Fly.io configuration file. The instance sizes and other configuration options are a great starting point for both services. You can find the most up-to-date instrucctions on the Fly.io website. https://fly.io/docs/apps/launch/
