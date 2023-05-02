## Remove Subscription

Deletes a user's subscriptions for a specified survey.
Removes user connection from `survey.SURVEY_ID` channel.

### Request

| URL                        | Method   | Allowed Providers |
| -------------------------- | -------- | ----------------- |
| `/subscriptions/:surveyId` | `DELETE` | `socketio`        |

### Request Headers

| Header          | Required | Description              | Example                           |
| --------------- | -------- | ------------------------ | --------------------------------- |
| `Authorization` | yes      | The authorization token. | `Bearer 123412341234123412341234` |

### URL Params

| Param      | Type   | Required | Description | Example                                   |
| ---------- | ------ | -------- | ----------- | ----------------------------------------- |
| `surveyId` | string | yes      | Survey Id   | `/subscriptions/111111111111111111111111` |

### Request Body

| Type | Required | Reference |
| ---- | -------- | --------- |
| -    | -        | -         |

### Success Response
  ```json
  {
    "success": true
  }
  ```
