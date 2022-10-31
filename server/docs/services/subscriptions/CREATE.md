## Create Subscription

Creates subscriptions for the currently authenticated user for the specified survey.
The user connection is added to the `survey.SURVEY_ID` channel.

### Request

| URL              | Method | Allowed Providers |
| ---------------- | ------ | ----------------- |
| `/subscriptions` | `POST` | `socketio`        |

### Request Headers

| Header          | Required | Description              | Example                           |
| --------------- | -------- | ------------------------ | --------------------------------- |
| `Authorization` | yes      | The authorization token. | `Bearer 123412341234123412341234` |

### URL Params

| Param | Type | Required | Description | Example |
| ----- | ---- | -------- | ----------- | ------- |
| -     | -    | -        | -           | -       |

### Request Body

| Type                                                   | Required | Reference                                     |
| ------------------------------------------------------ | -------- | --------------------------------------------- |
| object ([Subscription](../../schemas/SUBSCRIPTION.md)) | yes      | [Subscription](../../schemas/SUBSCRIPTION.md) |

### Success Response

```json
{
  "success": true
}
```
