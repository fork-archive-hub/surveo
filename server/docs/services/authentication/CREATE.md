## Authenticate User

Returns a user object and an authentication token with information about the used authentication strategy.

### Request

| URL               | Method | Allowed Providers |
| ----------------- | ------ | ----------------- |
| `/authentication` | `POST` | `external`        |

### Request Headers

| Header | Required | Description | Example |
| ------ | -------- | ----------- | ------- |
| -      | -        | -           | -       |

### URL Params

| Param | Type | Required | Description | Example |
| ----- | ---- | -------- | ----------- | ------- |
| -     | -    | -        | -           | -       |

### Request Body

| Type                                                       | Required | Reference                                         |
| ---------------------------------------------------------- | -------- | ------------------------------------------------- |
| object ([Authentication](../../schemas/AUTHENTICATION.md)) | yes      | [Authentication](../../schemas/AUTHENTICATION.md) |

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
