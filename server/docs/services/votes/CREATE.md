## Create Vote

Endpoint used to receive votes for a specific survey.
Returns the status of whether the vote was accepted.

### Request

| URL      | Method | Allowed Providers |
| -------- | ------ | ----------------- |
| `/votes` | `POST` | `external`        |

### Request headers

| Header | Required | Description | Example |
| ------ | -------- | ----------- | ------- |
| -      | -        | -           | -       |

### URL params

| Param | Type | Required | Description | Example |
| ----- | ---- | -------- | ----------- | ------- |
| -     | -    | -        | -           | -       |

### Request body

| Type                                   | Required | Reference                     |
| -------------------------------------- | -------- | ----------------------------- |
| object ([Vote](../../schemas/VOTE.md)) | yes      | [Vote](../../schemas/VOTE.md) |

### Success Response

```json
{
  "success": true
}
```
