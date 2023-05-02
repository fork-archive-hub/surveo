## **Find Users**

Endpoint partially unlocked, used to receive survey author data.
Endpoint always returns the data of the currently authenticated user.

### Request

| URL      | Method | Allowed Providers |
| -------- | ------ | ----------------- |
| `/users` | `GET`  | `external`        |

### Request headers

| Header          | Required | Description              | Example                           |
| --------------- | -------- | ------------------------ | --------------------------------- |
| `Authorization` | yes      | The authorization token. | `Bearer 123412341234123412341234` |

### URL params

| Param | Type | Required | Description | Example |
| ----- | ---- | -------- | ----------- | ------- |
| -     | -    | -        | -           | -       |

### Request body

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
      "username": "username",
      "createdAt": "2022-05-23T19:19:23.989Z",
      "updatedAt": "2022-05-23T19:19:23.989Z",
      "__v": 0
    }
  ]
}
```
