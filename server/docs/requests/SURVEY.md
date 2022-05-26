# Survey

## `name`

> `string` | required | min: `3` | max: `240`

Name of the survey

## `protection`

> `object`: [Protection](./PROTECTION.md) | required

An object containing data on whether security measures are enabled.

## `questions`

> `array`: [Question](./QUESTION.md) | required | min: `1`

An array of questions for the survey.
