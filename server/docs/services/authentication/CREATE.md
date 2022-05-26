## **Authenticate User**

Returns a user object and an authentication token with information about the used authentication strategy.

- **URL**  
  `/authentication`

- **Allowed Providers**  
  `external`

- **Method:**  
  `POST`

- **Headers:**

  - **Required:**  
    `Authorization = 'Bearer {token}'`

- **URL Params**  
  None

- **Data Params**

  > `object`: [Authentication](../../requests/AUTHENTICATION.md)

- **Success Response:**
  ```json
  {
    "username": "username",
    "_id": "123412341234123412341234",
    "createdAt": "2022-05-26T22:07:36.078Z",
    "updatedAt": "2022-05-26T22:07:36.078Z",
    "__v": 0
  }
  ```
