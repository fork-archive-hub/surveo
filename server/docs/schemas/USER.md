# User

## Schema

| Key        | Type   | Description | Required | Restrictions                    |
| ---------- | ------ | ----------- | -------- | ------------------------------- |
| `username` | string | Username    | yes      | `minLength: 3`, `maxLength: 15` |
| `password` | string | Password    | yes      | `minLength: 3`                  |

## Example

```json
{
  "username": "username",
  "password": "password"
}
```
