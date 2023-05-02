## Patch Survey

Edits basic survey data. After successful modification, returns the entire survey object.

### Request

| URL                  | Method  | Allowed Providers |
| -------------------- | ------- | ----------------- |
| `/surveys/:surveyId` | `PATCH` | `external`        |

### Request headers

| Header          | Required | Description              | Example                           |
| --------------- | -------- | ------------------------ | --------------------------------- |
| `Authorization` | yes      | The authorization token. | `Bearer 123412341234123412341234` |

### URL params

| Param      | Type   | Required | Description    | Example                    |
| ---------- | ------ | -------- | -------------- | -------------------------- |
| `surveyId` | string | yes      | The survey ID. | `/surveys/5e9b1b9a1b9a1b9a1b9a1b9a` |

### Request body

| Type                                                               | Required | Reference                                                 |
| ------------------------------------------------------------------ | -------- | --------------------------------------------------------- |
| object ([Survey Information](../../schemas/SURVEY_INFORMATION.md)) | yes      | [Survey Information](../../schemas/SURVEY_INFORMATION.md) |

### Success Response

```json
{
  "authorId": "123412341234123412341234",
  "name": "name",
  "open": true,
  "protection": {
    "captcha": true,
    "ipRestriction": true
  },
  "questions": [],
  "_id": "123412341234123412341234",
  "createdAt": "2022-05-26T22:10:48.321Z",
  "updatedAt": "2022-05-26T22:10:48.321Z",
  "__v": 0
}
```
