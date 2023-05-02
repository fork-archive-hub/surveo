# Survey

## Schema

| Key          | Type                                   | Description                                                         | Required | Restrictions                              |
| ------------ | -------------------------------------- | ------------------------------------------------------------------- | -------- | ----------------------------------------- |
| `name`       | string                                 | Name of the survey                                                  | yes      | `minLength: 3`, `maxLength: 240`          |
| `open`       | bool                                   | Boolean indicating if the survey is open or not.                    | yes      |                                           |
| `protection` | object ([Protection](./PROTECTION.md)) | An object containing data on whether security measures are enabled. | yes      | [Protection](./PROTECTION.md)             |
| `questions`  | array (of [Question](./QUESTION.md))   | An array of questions for the survey.                               | yes      | [Question](./QUESTION.md), `minLength: 1` |

## Example

```json
{
  "name": "Survey name",
  "open": true,
  "protection": {
    "captcha": true,
    "ipRestriction": false
  },
  "questions": [
    {
      "text": "What is your favorite color?",
      "answers": [
        {
          "index": 0,
          "text": "Red"
        },
        {
          "index": 1,
          "text": "Blue"
        },
        {
          "index": 2,
          "text": "Green"
        }
      ],
      "subquestions": [
        {
          "requirements": [0],
          "text": "Why 'Red'?",
          "answers": [
            {
              "index": 0,
              "text": "Because it's my favorite color!"
            },
            {
              "index": 1,
              "text": "Because it's the color of blood!"
            }
          ]
        }
      ]
    }
  ]
}
```
