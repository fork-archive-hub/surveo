## Get Survey

Returns a fully expanded object containing all data about the survey.
If the currently authenticated user is the author of the survey it will also return an additional `votes` field in the answers specifying the number of votes for a given answer.

### Request

| URL                  | Method | Allowed Providers |
| -------------------- | ------ | ----------------- |
| `/surveys/:surveyId` | `GET`  | `external`        |

### Request headers

| Header          | Required | Description              | Example                           |
| --------------- | -------- | ------------------------ | --------------------------------- |
| `Authorization` | no       | The authorization token. | `Bearer 123412341234123412341234` |

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
  "createdAt": "2022-05-23T19:22:32.195Z",
  "updatedAt": "2022-05-24T20:12:09.489Z",
  "__v": 0,
  "author": {
    "_id": "123412341234123412341234",
    "username": "username",
    "createdAt": "2022-05-23T19:19:23.989Z",
    "updatedAt": "2022-05-23T19:19:23.989Z",
    "__v": 0
  }
}
```
