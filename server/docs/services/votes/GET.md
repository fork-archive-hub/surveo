## **Get Vote**

Endpoint used to receive votes for a specific survey.
Returns the status of whether the vote was accepted.

- **URL**  
  `/votes/:surveyId`

- **Allowed Providers**  
  `external`

- **Method:**  
  `GET`

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
