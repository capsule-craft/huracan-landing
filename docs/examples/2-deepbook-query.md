---
sidebar_position: 5
---

# Querying Deepbook

Query and analyze data from Deepbook pools using Huracan.

## Retrieve all deepbook pools

```graphql
query Objects($args: ObjectArgsInput!) {
  objects(args: $args) {
    id
    type {
      generics
    }
    fields
  }
}
```

GraphQL Variables:

```json
{
  "args": {
    "type": "0xdee9::clob_v2::Pool<(.*)>",
    "limit": 10
  }
}
```

## Retrieve all pools for a specific trading-pair

```graphql
query Objects($args: ObjectArgsInput!) {
  objects(args: $args) {
    id
    type {
      generics
    }
    fields
  }
}
```

GraphQL Variables:

```json
{
  "args": {
    "type": "0xdee9::clob_v2::Pool<0x2::sui::SUI, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>"
  }
}
```

## Retrieve all pools matching a set of trading-pairs

```graphql
query Objects($args: ObjectArgsInput!) {
  objects(args: $args) {
    id
    type {
      generics
    }
    fields
  }
}
```

GraphQL Variables

```json
{
  "args": {
    "types": [
      "0xdee9::clob_v2::Pool<0x2::sui::SUI, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>",
      "0xdee9::clob_v2::Pool<0xbc3a676894871284b3ccfb2eec66f428612000e2a6e6d23f592ce8833c27c973::coin::COIN, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>"
    ]
  }
}
```
