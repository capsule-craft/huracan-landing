---
sidebar_position: 4
---

# MongoDB Object Queries
Rather than using the GraphQL API, you may directly query MongoDB for ad-hoc information, or to build a custom API for your project. These examples use the MongoDB shell, but you may obviously use an SDK or other API to query MongoDB.

## Estimate Total Documents in a MongoDB Collection
- Use the MongoDB shell to connect to your MongoDB cluster.
- Double check the name of your database and collections, which you may have configured differently.
```shell
db.getSiblingDB("sui").getCollection("prod_mainnet_objects").estimatedDocumentCount();
```


## Total Objects for by Sui Package ID
- Use the MongoDB shell to connect to your MongoDB cluster.
- Double check the name of your database and collections, which you may have configured differently.
```shell
db.getSiblingDB("sui").getCollection("prod_mainnet_objects")
.aggregate([
    { $unwind: "$object.type" },
    { $sortByCount: "$object.type" }
]);
```

## Get All Objects Owned by an Address
- Use the MongoDB shell to connect to your MongoDB cluster.
- Double check the name of your database and collections, which you may have configured differently.
```shell
db.prod_mainnet_objects.find(
    {
      "object.owner.ObjectOwner": "0xd8edf68fea4fa065cadd28421d85b5bc5bbe205d44ed3ba361bd70e40b7f8faa"
    }
);
```

## Additional Examples
https://github.com/capsule-craft/huracan/tree/main/example-queries/mongodb
