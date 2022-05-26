## **Create Vote**

Endpoint used to receive votes for a specific survey.
Returns the status of whether the vote was accepted.

- **URL**  
  `/votes`

- **Allowed Providers**  
  `external`

- **Method:**  
  `POST`

- **URL Params**  
  None

- **Data Params**

  > `object`: [Vote](../../requests/VOTE.md)

- **Success Response:**
  ```json
  {
    "success": true
  }
  ```
