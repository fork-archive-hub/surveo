# Vote

## Schema

| Key           | Type                                     | Description                        | Required | Restrictions                    |
| ------------- | ---------------------------------------- | ---------------------------------- | -------- | ------------------------------- |
| `surveyId`    | string                                   | Survey ID                          | yes      | `length: 24`                    |
| `answerSheet` | object ([AnswerSheet](./ANSWERSHEET.md)) | Survey answer sheet                | yes      | [AnswerSheet](./ANSWERSHEET.md) |
| `token`       | string                                   | Token generated by captcha service | no       |                                 |

## Example

```json
{
  "surveyId": "5c9f9b9b9b9b9b9b9b9b9b9b",
  "answerSheet": {
    "5c9f9b9b9b9b9b9b9b9b9b9b": "6c9f9b9b9b9b9b9b9b9b9b9b",
    "7c9f9b9b9b9b9b9b9b9b9b9c": "8c9f9b9b9b9b9b9b9b9b9b9c"
  },
  "token": "token"
}
```
