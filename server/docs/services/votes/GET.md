## **Get Vote**

Endpoint used to check if a vote has already been cast from a given ip address in a given survey.
Returns a logical value depending on whether a vote has been cast and the number of votes cast.

- **URL**  
  `/votes/:surveyId`

- **Allowed Providers**  
  `external`

- **Method:**  
  `GET`

- **Headers:**
  None

- **URL Params**

  - **Required:**  
    `surveyId = [string]`

- **Data Params**  
  None

- **Success Response:**
  ```json
  {
    "voted": true,
    "votes": 0
  }
  ```
