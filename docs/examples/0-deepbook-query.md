---
sidebar_position: 3
---

# Querying Deepbook

Query and analyze data from Deepbook pools using Huracan.

## Retrieve all deepbook pools

```graphql
query Objects($args: ObjectArgsInput!) {
  objects(args: $args) {
    id
    fields
    digest
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

## Retrieve pools of a specific type

```graphql
query Objects($args: ObjectArgsInput!) {
  objects(args: $args) {
    id
    fields
    digest
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

## Retrieve pools with multiple types

```graphql
query Objects($args: ObjectArgsInput!) {
  objects(args: $args) {
    id
    fields
    digest
  }
}
```

GraphQL Variables

```json
{
  "args": {
    "types": [
      "0xdee9::clob_v2::Pool<0x2::sui::SUI, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>",
      "0xdee9::clob_v2::Pool<0x2::sui::SUI, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>"
    ]
  }
}
```
