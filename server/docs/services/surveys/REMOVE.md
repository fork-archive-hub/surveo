## Remove Survey

Deletes the poll specified in the query address.
Authenticated user must be the author of the survey in order to delete it.

### Request

| URL                  | Method   | Allowed Providers |
| -------------------- | -------- | ----------------- |
| `/surveys/:surveyId` | `DELETE` | `external`        |

### Request headers

| Header          | Required | Description              | Example                           |
| --------------- | -------- | ------------------------ | --------------------------------- |
| `Authorization` | yes      | The authorization token. | `Bearer 123412341234123412341234` |

### URL Params

| Param      | Type   | Required | Description | Example                             |
| ---------- | ------ | -------- | ----------- | ----------------------------------- |
| `surveyId` | string | yes      | Survey Id   | `/surveys/111111111111111111111111` |

### Request Body

| Type | Required | Reference |
| ---- | -------- | --------- |
| -    | -        | -         |

### Success Response

```json
{
  "_id": "123412341234123412341234",
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
    }
  ],
  "createdAt": "2022-05-26T22:10:48.321Z",
  "updatedAt": "2022-05-26T22:10:48.321Z",
  "__v": 0
}
```
