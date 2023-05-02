# Surveo-server

Repository contains the server-side application for [Surveo project](https://github.com/r1pk/surveo-client). Server is written in Node.js and uses the [Feathers](https://feathersjs.com/) framework.

## Pre-requisites

Application was developed and tested in a stable environment, utilizing the following versions:

- [node.js v19.7.0](https://nodejs.org/en/)
- [npm v9.6.0](https://nodejs.org/en/download/)

This ensures that the application runs smoothly and efficiently.

## Configuration

Configuration of the application is done in the `config` directory.

- `default.json` - file contains the default configuration of the application.
- `production.json` - file contains the production configuration of the application.

## Run Locally

Clone the project

```bash
  git clone https://github.com/r1pk/surveo-server.git
```

Go to the project directory

```bash
  cd surveo-server
```

Install dependencies

```bash
  npm install
```

Run the project locally

```bash
  npm start
```

## Project structure

```
master
  |-- config             # application configuration files
  |-- src                # application source code
  |  |-- hooks           # hooks used by services
  |  |-- middleware      # middlewares used by application
  |  |-- models          # database models definitions
  |  |-- services        # feathers services
  |  |  |-- service      # files related to a given service
  |-- app.js             # basic configuration of feathers application
  |-- app.hook.js        # global hooks used before and after all requests
  |-- authentication.js  # authentication configuration
  |-- channels.js        # socket channels configuration
  |-- mongoose.js        # mongoose database configuration
  |-- logger.js          # logger configuration
  |-- index.js           # file that runs the application
```

## Request authentication

In order for a user to be authenticated, the request must have an `Authorization` header and a `Bearer [TOKEN]` value. The token used in the header can be obtained from the `authentication` service.

## Services

Surveo server currently has 5 services:

- [authentication](https://github.com/r1pk/surveo-server#service-authentication-authentication)
- [users](https://github.com/r1pk/surveo-server#service-users-users)
- [subscriptions](https://github.com/r1pk/surveo-server#service-users-users)
- [surveys](https://github.com/r1pk/surveo-server#service-users-users)
- [votes](https://github.com/r1pk/surveo-server#service-users-users)

### Service: `authentication` (`/authentication`)

- [create](./docs/services/authentication/CREATE.md)

### Service: `users` (`/users`)

- [create](./docs/services/users/CREATE.md)
- [find](./docs/services/users/FIND.md)
- [get](./docs/services/users/GET.md)

### Service: `subscriptions` (`/subscriptions`)

- [create](./docs/services/subscriptions/CREATE.md)
- [remove](./docs/services/subscriptions/REMOVE.md)

### Service: `surveys` (`/surveys`)

- [create](./docs/services/surveys/CREATE.md)
- [find](./docs/services/surveys/FIND.md)
- [get](./docs/services/surveys/GET.md)
- [patch](./docs/services/surveys/PATCH.md)
- [remove](./docs/services/surveys/REMOVE.md)

### Service: `votes` (`/votes`)

- [create](./docs/services/votes/CREATE.md)
- [get](./docs/services/votes/GET.md)

## Available events

Available events that are emitted when a method is executed in a given service.

- ### Service: `votes`

  - #### CREATE `"created"`

    Event payload It is the same one you get from the `surveys` service when performing a [GET](./docs/services/surveys/GET.md) query.

    Event is emitted after each successfully approved vote for a survey. The event is emitted only to users in the "survey.SURVEY_ID" channel.

## Request validation

Validation of the query body is done with the `validateSchema` hook which uses the `Joi` library. Each service has a `SERVICE.schemas.js` file that contains the schemas for the queries it supports.

## Author

- Patryk [r1pk](https://github.com/r1pk) Krawczyk

## License

- [MIT](https://choosealicense.com/licenses/mit/)
