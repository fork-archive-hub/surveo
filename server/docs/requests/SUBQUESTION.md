# Subquestion

## `requirements`

> `array`: `number` | required

An array containing numeric values (specified as `index` in [Answer](./ANSWER.md)) specifying which answers must be given to the parent question in order for the user to vote on the sub-question.

## `text`

> `string` | required | min: `3` | max: `140`

A text value that specifies the content of the sub-question.

## `answers`

> `array`: [Answer](./ANSWER.md) | required | min: `2`

An array of answers to a given sub-question.
