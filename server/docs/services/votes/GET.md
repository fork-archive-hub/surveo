## **Get Vote**

Endpoint used to check if a vote has already been cast from a given ip address in a given survey.
Returns a logical value depending on whether a vote has been cast and the number of votes cast.

### Request

| URL                | Method | Allowed Providers |
| ------------------ | ------ | ----------------- |
| `/votes/:surveyId` | `GET`  | `external`        |

### Request headers

| Header | Required | Description | Example |
| ------ | -------- | ----------- | ------- |
| -      | -        | -           | -       |

### URL Params

| Param      | Type   | Required | Description | Example                           |
| ---------- | ------ | -------- | ----------- | --------------------------------- |
| `surveyId` | string | yes      | Survey Id   | `/votes/111111111111111111111111` |

### Request Body

| Type | Required | Reference |
| ---- | -------- | --------- |
| -    | -        | -         |

### Success Response

```json
{
  "voted": true,
  "votes": 0
}
```
