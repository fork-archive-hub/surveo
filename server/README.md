# Surveo-server

Directory containing server-side application for [Surveo project](https://github.com/r1pk/surveo). Surveo server is written in Node.js and uses the [Feathers](https://feathersjs.com/) framework.

## Project structure

```bash
server/                     # root directory
├─ config/                  # application configuration files
├─ docs/                    # documentation files
├─ src/                     # application source code
│  ├─ hooks/                # custom hooks
│  ├─ middleware/           # application middleware
│  ├─ models/               # database models
│  ├─ services/             # application services
│  ├─ app.hooks.js          # global application hooks
│  ├─ app.js                # application initialization
│  ├─ authentication.js     # authentication configuration
│  ├─ channels.js           # channels configuration
│  ├─ index.js              # application entry point
│  ├─ logger.js             # logger configuration
│  ├─ mongoose.js           # mongoose configuration
```

## Configuration

Configuration files are located in the `config` directory and are in JSON format:

- `production.json` - Configuration used in production environment.
- `default.json` - Default server configuration file and will be used as fallback for other environment-specific configuration files.

To run the server, you need to set following settings in one of the above files:

```json
{
  ...
  "captcha": {
    "secret": ""    // Google reCAPTCHA secret key
  },
  "mongodb": ""     // MongoDB connection string with username and password
}
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/r1pk/surveo.git
```

Go to the server directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Run the project locally

```bash
  npm start
```

## Request authentication

In order for a user to be authenticated, the request must have an `Authorization` header and a `Bearer [TOKEN]` value. The token used in the header can be obtained from the `authentication` service.

## Services

Surveo server currently has 5 services:

- [authentication](#service-authentication-authentication)
- [users](#service-users-users)
- [subscriptions](#service-users-users)
- [surveys](#service-users-users)
- [votes](#service-users-users)

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
