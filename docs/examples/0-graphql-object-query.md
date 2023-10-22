---
sidebar_position: 3
---

# GraphQL Object Queries
There are two endpoints exposed via GraphQL. One will fetch a single object, the other will fetch multiple objects. Each has unique query parameters. When you open the GraphQL web app, you will see them along with details about the query parameters available.

## Get Single Object by ID
- Use the 'object' endpoint.

```graphql
query GetObjectById($objectId: ID!) {
    object(id: $objectId) {
        type {
            full
        }
        fields
        owner
    }
}
```

GraphQL Variables:
```json
{
  "objectId": "0xf4f630eb6dff12bf163ed9a755cd32f0a72b4365f4126daa35d1850e60ba8318"
}
```

## Get All Objects by Type

```graphql
query GetObjectsByType($args: ObjectArgsInput!) {
    objects(args: $args) {
        id
        owner
    }
}
```

GraphQL Variables:
- Use the 'objects' endpoint.
```json
{
  "args": {
    "type": "0xac176715abe5bcdaae627c5048958bbe320a8474f524674f3278e31af3c8b86b::fuddies::Fuddies"
  }
}
```

