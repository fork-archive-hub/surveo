## **Create Subscription**

Creates subscriptions for the currently authenticated user for the specified survey.
The user connection is added to the `survey.SURVEY_ID` channel.

- **URL**  
  `/subscriptions`

- **Allowed Providers**  
  `socketio`

- **Method:**  
  `POST`

- **Headers:**

  - **Required:**  
    `Authorization = 'Bearer {token}'`

- **URL Params**  
  None

- **Data Params**

  > `object`: [Subscription](../../requests/SUBSCRIPTION.md)

- **Success Response:**
  ```json
  {
    "success": true
  }
  ```
