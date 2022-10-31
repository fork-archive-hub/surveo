# Protection

## Schema

| Key             | Type    | Description                                                     | Required | Restrictions |
| --------------- | ------- | --------------------------------------------------------------- | -------- | ------------ |
| `captcha`       | boolean | A value indicating whether captcha protection is active.        | no       |              |
| `ipRestriction` | boolean | A value indicating whether ip restriction protection is active. | no       |              |

## Example

```json
{
  "captcha": true,
  "ipRestriction": false
}
```
