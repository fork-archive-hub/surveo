# Survey Information

## Schema

| Key          | Type                                   | Description                                                         | Required | Restrictions                     |
| ------------ | -------------------------------------- | ------------------------------------------------------------------- | -------- | -------------------------------- |
| `name`       | string                                 | Name of the survey                                                  | yes      | `minLength: 3`, `maxLength: 240` |
| `open`       | bool                                   | Boolean indicating if the survey is open or not.                    | yes      |                                  |
| `protection` | object ([Protection](./PROTECTION.md)) | An object containing data on whether security measures are enabled. | yes      | [Protection](./PROTECTION.md)    |

## Example

```json
{
  "name": "Survey name",
  "open": true,
  "protection": {
    "captcha": true,
    "ipRestriction": false
  }
}
```
