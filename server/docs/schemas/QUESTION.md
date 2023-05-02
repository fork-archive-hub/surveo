# Question

## Schema

| Key            | Type                                       | Description                                              | Required | Restrictions                          |
| -------------- | ------------------------------------------ | -------------------------------------------------------- | -------- | ------------------------------------- |
| `text`         | string                                     | A text value that specifies the content of the question. | yes      | `minLength: 3`, `maxLength: 140`      |
| `answers`      | array (of [Answer](./ANSWER.md))           | An array of answers to a given question.                 | yes      | [Answer](./ANSWER.md), `minLength: 2` |
| `subquestions` | array (of [Subquestion](./SUBQUESTION.md)) | An array of sub-questions for a given question.          | yes      | [Subquestion](./SUBQUESTION.md)       |

## Example

```json
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
    }
  ],
  "subquestions": [
    {
      "requirements": [0],
      "text": "Is 'Red' your favorite color?",
      "answers": [
        {
          "index": 0,
          "text": "It's my favorite color"
        },
        {
          "index": 1,
          "text": "It's not my favorite color"
        }
      ]
    }
  ]
}
```
