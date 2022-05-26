## **Create User**

Creates a new user which is later used for authentication.

- **URL**  
  `/users`

- **Allowed Providers**  
  `external`

- **Method:**  
  `POST`

- **URL Params**  
  None

- **Data Params**

  > `object`: [User](../../requests/USER.md)

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
