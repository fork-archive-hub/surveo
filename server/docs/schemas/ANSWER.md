# Answer

## Schema

| Key     | Type   | Description                                                                                                            | Required | Restrictions                     |
| ------- | ------ | ---------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------- |
| `index` | number | A numeric value used, among other things, to determine the required answers for a subquestion and to sort the answers. | yes      | `min: 0`                         |
| `text`  | string | A text value that specifies the content of the answer.                                                                 | yes      | `minLength: 2`, `maxLength: 140` |

## Example

```json
{
  "index": 0,
  "text": "Answer text"
}
```
