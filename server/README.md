# Surveo-server

Surveo-server is a server written in Node.js using the Feathers.js framework for the Surveo application.
Surveo is application that allows you to create surveys and store them in a database and process the received votes with basic protection.

## Pre-requisites

- [node.js v17.0 or higher](https://nodejs.org/en/)
- [npm v7.0 or higher](https://nodejs.org/en/download/)

## Installation

Clone surveo-server repository

```bash
git clone https://github.com/r1pk/surveo-server.git master
```

Install all dependencies

```bash
cd ./master
npm install
```

Run server

```bash
npm start
```

## Project structure

```
master
  |-- config             # folder contains application configurations files
  |-- src                # folder contains source files of application
  |  |-- hooks           # folder contains hooks that can be used in any service
  |  |-- middleware      # folder contains express middleware
  |  |-- models          # folder contains database model files
  |  |-- services        # folder contains all services registered in our app
  |  |  |-- service      # folder contains all files related to given service
  |-- app.js             # file with basic configuration of application
  |-- app.hook.js        # file with hooks that apply to every service
  |-- authentication.js  # file with authentication strategies available in our application
  |-- channels.js        # file with feathers event channels definitions
  |-- mongoose.js        # file with database connection
  |-- logger.js          # file with logger configuration
  |-- index.js           # file that runs the application
```

## Request authentication
In order for a user to be authenticated, the request must have an `Authorization` header and a `Bearer [TOKEN]` value. The token used in the header can be obtained from the `authentication` service.

## Services

Surveo server currently has 5 services `authentication`, `users`, `subscriptions`, `surveys`, `votes`

### Service: `authentication` (`/authentication`)
#### CREATE `POST`
`URL: /authentication`
`Authentication required: No`
`Allowed providers: *`

Request body
```
{
    "strategy": "local"
    "username": String - username
    "password": String - password
}
```

Response
```
{
    "accessToken": String - authentication token used to authenticate requests
    "authentication": Object - object containing information about the authentication strategy
    "user": User {
        "_id": String - user id
        "username": String - username
        "createdAt": String - timestamp of user registration
        "updatedAt": String - timestamp of the last user update
        "__v": 0
    }
}
```
Endpoint is used to log the user in and on successful login returns an authentication token.

### Service: `users` (`/users`)
#### CREATE `POST`
`URL: /users`
`Authentication required: No`
`Allowed providers: *`

Request body
```
{
    "username": String - username,
    "password": String - password
}
```

Response
```
User {
    "username": String - username
    "_id": String - user id
    "createdAt": String - registration timestamp
    "updatedAt": String - last update timestamp
    "__v": 0
}
```
Endpoint is used for user registration where upon success it returns an object containing basic data including user id.

#### FIND `GET`
`URL: /users`
`Authentication required: Yes`
`Allowed providers: *`

Request body
```
{}
```

Response
```
{
    "total": Number - number of results
    "limit": Number - limit of results per request
    "skip": Number - skipped results
    "data": Array<User> [
        {
            "_id": String - user id
            "username": String - username
            "createdAt": String - registration timestamp
            "updatedAt": String - last update timestamp
            "__v": 0
        }
    ]
}
```
Endpoint has restrictions that only return the object of the currently authenticated user

#### GET `GET`
`URL: /users/:userId`
`Authentication required: Yes`
`Allowed providers: *`

Request body
```
{}
```

Response
```
User {
    "_id": String - user id
    "username": String - username
    "createdAt": String - registration timestamp
    "updatedAt": String - last update timestamp
    "__v": 0
}
```
Endpoint has restrictions that only return the object of the currently authenticated user

### Service: `subscriptions` (`/subscriptions`)
#### CREATE `POST`
`URL: /subscriptions`
`Authentication required: Yes`
`Allowed providers: 'socketio'`

Request body
```
{
    "surveyId": String - id of the survey
}
```

Response
```
{
    "success": Boolean - status of the response
}
```
Endpoint used to create subscriptions that inform the user about new votes in a survey and adds a user connection to the "survey.SURVEY_ID" channel. Currently, only the author of a survey can create subscriptions to that survey.

#### REMOVE `DELETE`
`URL: /subscriptions/:surveyId`
`Authentication required: Yes`
`Allowed providers: 'socketio'`

Request body
```
{}
```

Response
```
{
    "success": Boolean - status of the response
}
```
Endpoint used to cancel a previously created subscription.

### Service: `surveys` (`/surveys`)
#### CREATE `POST`
`URL: /surveys`
`Authentication required: Yes`
`Allowed providers: *`

Request body
```
{
    "name": String - name of the survey
    "protection": {
        "captcha": Boolean - status of captcha protection
        "ipRestriction": Boolean - status of ip restriction protection
    },
    "questions": Array<Question> [
        Question {
            "text": String - text of the question
            "answers": Array<Answer> [
                Answer {
                    "text": String - text of the answer
                    "index": Number - unique number of question used to order answers
                }
            ]
            "subQuestions": Array<SubQuestion> [
                SubQuestion {
                    "requirements": Array<Number> - array of unique numbers used in question answer that are required to show the sub-question
                    "text": String - text of the question
                    "answers": Array<Answer> [
                        Answer {
                            "text": String - text of the answer
                            "index": Number - unique number of question used to order answers
                        }
                    ]
                }
            ]
        }
    ]
}
```

Response
```
Survey {
    "_id": String - id of the survey
    "authorId": String - user id of the author
    "name": String - name of the survey
    "createdAt": String - create timestamp
    "updatedAt": String - last update timestamp
    "protection": {
        "captcha": Boolean - status of captcha protection
        "ipRestriction": Boolean - status of ip restriction protection
    },
    "questions": Array<Question> [
        Question {
            "_id": id of the question
            "text": String - text of the question
            "answers": Array<Answer> [
                Answer {
                    "_id": id of the answer
                    "text": String - text of the answer
                    "index": Number - unique number of question used to order answers
                    "votes": Number - number of votes to given answer
                }
            ]
            "subQuestions": Array<SubQuestion> [
                SubQuestion {
                    "_id": id of the sub-question
                    "requirements": Array<Number> - array of unique numbers used in question answer that are required to show the sub-question
                    "text": String - text of the question
                    "answers": Array<Answer> [
                        Answer {
                            "_id": id of the answer
                            "text": String - text of the answer
                            "index": Number - unique number of question used to order answers
                            "votes": Number - number of votes to given answer
                        }
                    ]
                }
            ]
        }
    ]
}
```
Endpoint used to create surveys which are later saved in database with Id and timestamps added by model.

#### FIND `GET`
`URL: /surveys`
`Authentication required: No`
`Allowed providers: *`

Request body
```
{}
```

Response
```
{
    "total": Number - number of results
    "limit": Number - limit of results per request
    "skip": Number - skipped results
    "data": [
        {
            "_id": String - survey id,
            "authorId": String - survey author id
            "name": String - survey name
            "createdAt": String - survey create timestamp
            "updatedAt": String - survey last update timestamp
            "__v": 0
        }
    ]
}
```
Endpoint used to return reduced objects of surveys that match the query

#### GET `GET`
`URL: /surveys/:surveyId`
`Authentication required: No`
`Allowed providers: *`

Request body
```
{}
```

Response
```
Survey {
    "_id": String - id of the survey
    "authorId": String - user id of the author
    "author": User {
        "_id": String - author id
        "username": String - author username
        "createdAt": String - registration timestamp
        "updatedAt": String - last update timestamp
        "__v": 0
    }
    "name": String - name of the survey
    "createdAt": String - create timestamp
    "updatedAt": String - last update timestamp
    "protection": {
        "captcha": Boolean - status of captcha protection
        "ipRestriction": Boolean - status of ip restriction protection
    },
    "questions": Array<Question> [
        Question {
            "_id": id of the question
            "text": String - text of the question
            "answers": Array<Answer> [
                Answer {
                    "_id": id of the answer
                    "text": String - text of the answer
                    "index": Number - unique number of question used to order answers
                    "votes": Number - number of votes to given answer (ONLY IF AUTHENTICATED USER IS AUTHOR OF THE SURVEY)
                }
            ]
            "subQuestions": Array<SubQuestion> [
                SubQuestion {
                    "_id": id of the sub-question
                    "requirements": Array<Number> - array of unique numbers used in question answer that are required to show the sub-question
                    "text": String - text of the question
                    "answers": Array<Answer> [
                        Answer {
                            "_id": id of the answer
                            "text": String - text of the answer
                            "index": Number - unique number of question used to order answers
                            "votes": Number - number of votes to given answer (ONLY IF AUTHENTICATED USER IS AUTHOR OF THE SURVEY)
                        }
                    ]
                }
            ]
        }
    ]
}
```
Endpoint is used to get questions and answers to survey, if authenticated in user is survey author then endpoint returns the same object except for answers where there is additional field `votes` containing number of votes for given answer.

#### REMOVE `DELETE`
`URL: /surveys/:surveyId`
`Authentication required: Yes`
`Allowed providers: *`

Request body
```
{}
```

Response
```
{}
```
Endpoint used to remove survey with requested surveyId. In order for a survey to be deleted, the authenticated user must be the author of the survey.

### Service: `votes` (`/votes`)
#### CREATE `POST`
`URL: /votes`
`Authentication required: No`
`Allowed providers: *`

Request body
```
{
    "surveyId": String - survey id
    "answerSheet": {
        [QUESTION_ID]: [ANSWER_ID]
        ...
        [QUESTION_ID]: [ANSWER_ID]
    }
    "token": String - captcha token (Only if captcha protection is enabled)
}
```

Response
```
{
    "success": Boolean - status of the response
}
```
Endpoint is used to accept votes for a survey with the specified Id. Endpoint verifies that all answers have been submitted and that the user meets security requirements.

#### GET `GET`
`URL: /votes/:surveyId`
`Authentication required: No`
`Allowed providers: *`

Request body
```
{}
```

Response
```
{
    "voted": Boolean - returns true or false depending on whether a vote from a given ip address was submitted
    "votes" Number - number of votes from given ip address
}
```
Endpoint is used to check whether votes for a poll have been accepted from a given ip address (from which the request is made).

## Available events
Available events that are emitted when a method is executed in a given service.

### Service: `votes`
#### CREATE `"created"`
Event payload
```
Survey {
    "_id": String - id of the survey
    "authorId": String - user id of the author
    "author": User {
        "_id": String - author id
        "username": String - author username
        "createdAt": String - registration timestamp
        "updatedAt": String - last update timestamp
        "__v": 0
    }
    "name": String - name of the survey
    "createdAt": String - create timestamp
    "updatedAt": String - last update timestamp
    "protection": {
        "captcha": Boolean - status of captcha protection
        "ipRestriction": Boolean - status of ip restriction protection
    },
    "questions": Array<Question> [
        Question {
            "_id": id of the question
            "text": String - text of the question
            "answers": Array<Answer> [
                Answer {
                    "_id": id of the answer
                    "text": String - text of the answer
                    "index": Number - unique number of question used to order answers
                    "votes": Number - number of votes to given answer
                }
            ]
            "subQuestions": Array<SubQuestion> [
                SubQuestion {
                    "_id": id of the sub-question
                    "requirements": Array<Number> - array of unique numbers used in question answer that are required to show the sub-question
                    "text": String - text of the question
                    "answers": Array<Answer> [
                        Answer {
                            "_id": id of the answer
                            "text": String - text of the answer
                            "index": Number - unique number of question used to order answers
                            "votes": Number - number of votes to given answer
                        }
                    ]
                }
            ]
        }
    ]
}
```

An event is emitted after each successfully approved vote for a survey. The event is emitted only to users in the "survey.SURVEY_ID" channel.


## Author

- Patryk [r1pk](https://github.com/r1pk) Krawczyk

## License

- [MIT](https://choosealicense.com/licenses/mit/)
