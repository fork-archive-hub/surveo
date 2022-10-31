## Create Survey

Creates a Survey that is assigned to the currently authenticated user and then returns an object containing additional fields such as `_id` and timestamps.

### Request

| URL        | Method | Allowed Providers |
| ---------- | ------ | ----------------- |
| `/surveys` | `POST` | `external`        |

### Request Headers

| Header          | Required | Description              | Example                           |
| --------------- | -------- | ------------------------ | --------------------------------- |
| `Authorization` | yes      | The authorization token. | `Bearer 123412341234123412341234` |

### URL Params

| Param | Type | Required | Description | Example |
| ----- | ---- | -------- | ----------- | ------- |
| -     | -    | -        | -           | -       |

### Request Body

| Type                                       | Required | Reference                         |
| ------------------------------------------ | -------- | --------------------------------- |
| object ([Survey](../../schemas/SURVEY.md)) | yes      | [Survey](../../schemas/SURVEY.md) |

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
  "questions": [
    {
      "text": "text",
      "answers": [
        {
          "index": 0,
          "text": "text",
          "votes": 0,
          "_id": "123412341234123412341234"
        },
        {
          "index": 1,
          "text": "text",
          "votes": 0,
          "_id": "123412341234123412341234"
        }
      ],
      "subquestions": [
        {
          "requirements": [],
          "text": "text",
          "answers": [
            {
              "index": 0,
              "text": "text",
              "votes": 0,
              "_id": "123412341234123412341234"
            },
            {
              "index": 1,
              "text": "text",
              "votes": 0,
              "_id": "123412341234123412341234"
            }
          ],
          "_id": "123412341234123412341234"
        }
      ],
      "_id": "123412341234123412341234"
    },
    {
      "text": "text",
      "answers": [
        {
          "index": 0,
          "text": "text",
          "votes": 0,
          "_id": "123412341234123412341234"
        },
        {
          "index": 1,
          "text": "text",
          "votes": 0,
          "_id": "123412341234123412341234"
        }
      ],
      "subquestions": [
        {
          "requirements": [],
          "text": "123412341234123412341234",
          "answers": [
            {
              "index": 0,
              "text": "text",
              "votes": 0,
              "_id": "123412341234123412341234"
            },
            {
              "index": 1,
              "text": "text",
              "votes": 0,
              "_id": "123412341234123412341234"
            }
          ],
          "_id": "123412341234123412341234"
        }
      ],
      "_id": "123412341234123412341234"
    }
  ],
  "_id": "123412341234123412341234",
  "createdAt": "2022-05-26T22:10:48.321Z",
  "updatedAt": "2022-05-26T22:10:48.321Z",
  "__v": 0
}
```
