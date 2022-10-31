## Find Surveys

Returns reduced survey objects that match the query in the URL.

### Request

| URL                           | Method | Allowed Providers |
| ----------------------------- | ------ | ----------------- |
| `/surveys?authorId=:authorId` | `GET`  | `external`        |

### Request Headers

| Header | Required | Description | Example |
| ------ | -------- | ----------- | ------- |
| -      | -        | -           | -       |

### URL Params

| Param      | Type   | Required | Description | Example                                      |
| ---------- | ------ | -------- | ----------- | -------------------------------------------- |
| `authorId` | string | no       | Author Id   | `/surveys?authorId=111111111111111111111111` |

### Request Body

| Type | Required | Reference |
| ---- | -------- | --------- |
| -    | -        | -         |

### Success Response

```json
{
  "total": 1,
  "limit": 10,
  "skip": 0,
  "data": [
    {
      "_id": "123412341234123412341234",
      "authorId": "123412341234123412341234",
      "name": "name",
      "open": true,
      "createdAt": "2022-05-23T19:22:32.195Z",
      "updatedAt": "2022-05-24T20:12:09.489Z",
      "__v": 0
    }
  ]
}
```
