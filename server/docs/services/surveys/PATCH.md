## **Create Survey**

Edits basic survey data. After successful modification, returns the entire survey object.

- **URL**  
  `/surveys/:surveyId`

- **Allowed Providers**  
  `external`

- **Method:**  
  `PATCH`

- **Headers:**

  - **Required:**  
    `Authorization = 'Bearer {token}'`

- **URL Params**

  - **Required:**  
    `surveyId = [string]`

- **Data Params**

  > `object`: [Survey data](../../requests/SURVEY_DATA.md)

- **Success Response:**
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
