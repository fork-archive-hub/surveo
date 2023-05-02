## Get User

Endpoint partially unlocked, used to receive survey author data.
Endpoint always returns the data of the currently authenticated user.

### Request

| URL              | Method | Allowed Providers |
| ---------------- | ------ | ----------------- |
| `/users/:userId` | `GET`  | `external`        |

### Request headers

| Header          | Required | Description              | Example                           |
| --------------- | -------- | ------------------------ | --------------------------------- |
| `Authorization` | yes      | The authorization token. | `Bearer 123412341234123412341234` |

### URL params

| Param    | Type   | Required | Description | Example                           |
| -------- | ------ | -------- | ----------- | --------------------------------- |
| `userId` | string | yes      | User Id     | `/users/111111111111111111111111` |

### Request body

| Type | Required | Reference |
| ---- | -------- | --------- |
| -    | -        | -         |

### Success Response

```json
{
  "_id": "123412341234123412341234",
  "username": "username",
  "createdAt": "2022-05-23T19:19:23.989Z",
  "updatedAt": "2022-05-23T19:19:23.989Z",
  "__v": 0
}
```
