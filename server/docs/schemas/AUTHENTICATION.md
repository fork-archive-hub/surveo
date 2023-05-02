# Authentication

## Schema

| Key        | Type   | Description                           | Required | Restrictions                    |
| ---------- | ------ | ------------------------------------- | -------- | ------------------------------- |
| `strategy` | string | Strategy used for user authentication | yes      | `value: 'local'`                |
| `username` | string | Username                              | yes      | `minLength: 3`, `maxLength: 15` |
| `password` | string | Password                              | yes      | `minLength: 3`                  |

## Example

```json
{
  "strategy": "local",
  "username": "username",
  "password": "password"
}
```
