## **Find Surveys**

Returns reduced survey objects that match the query in the URL.

- **URL**  
  `/surveys?authorId=:authorId`

- **Allowed Providers**  
  `external`

- **Method:**  
  `GET`

- **Headers:**  
  None

- **URL Params**

  - **Optional:**  
    `authorId = [string]`

- **Data Params**  
  None

- **Success Response:**
  ```json
  {
    "total": 1,
    "limit": 10,
    "skip": 0,
    "data": [
      {
        "_id": "123412341234123412341234",
        "authorId": "123412341234123412341234",
        "name": "name",
        "createdAt": "2022-05-23T19:22:32.195Z",
        "updatedAt": "2022-05-24T20:12:09.489Z",
        "__v": 0
      }
    ]
  }
  ```
