## **Remove Survey**

Deletes the poll specified in the query address.
Authenticated user must be the author of the survey in order to delete it.

- **URL**  
  `/surveys/:surveyId`

- **Allowed Providers**  
  `external`

- **Method:**  
  `DELETE`

- **Headers:**

  - **Required:**  
    `Authorization = 'Bearer {token}'`

- **URL Params**

  - **Required:**  
    `surveyId = [string]`

- **Data Params**  
  None

- **Success Response:**
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
