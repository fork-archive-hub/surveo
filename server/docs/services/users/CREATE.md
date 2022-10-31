## Create User

Creates a new user which is later used for authentication.

### Request

| URL      | Method | Allowed Providers |
| -------- | ------ | ----------------- |
| `/users` | `POST` | `external`        |

### Request headers

| Header | Required | Description | Example |
| ------ | -------- | ----------- | ------- |
| -      | -        | -           | -       |

### URL Params

| Param | Type | Required | Description | Example |
| ----- | ---- | -------- | ----------- | ------- |
| -     | -    | -        | -           | -       |

### Request Body

| Type                                   | Required | Reference                     |
| -------------------------------------- | -------- | ----------------------------- |
| object ([User](../../schemas/USER.md)) | yes      | [User](../../schemas/USER.md) |

### Success Response

```json
{
  "username": "username",
  "_id": "123412341234123412341234",
  "createdAt": "2022-05-26T22:07:36.078Z",
  "updatedAt": "2022-05-26T22:07:36.078Z",
  "__v": 0
}
```
