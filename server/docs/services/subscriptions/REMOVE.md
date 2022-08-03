## **Remove Subscription**

Deletes a user's subscriptions for a specified survey.
Removes user connection from `survey.SURVEY_ID` channel.

- **URL**  
  `/subscriptions/:surveyId`

- **Allowed Providers**  
  `socketio`

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
    "success": true
  }
  ```
