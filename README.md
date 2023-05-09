# Surveo

Surveo is a responsive web application that allows users to create online surveys with basic security measures and to analyze results using multiple forms of result presentation. Surveo is built using technologies such as [React](https://reactjs.org/), [React-Router](https://reactrouter.com), [Redux](https://redux.js.org/), [Material-UI](https://mui.com/) and [Feathers](https://feathersjs.com/).

## Project structure

```bash
project/            # root directory
├─ client/          # client-side application
├─ server/          # server-side application
```

## Pre-requisites

Application was developed and tested in a stable environment, utilizing the following versions:

- [node.js v19.7.0](https://nodejs.org/en/)
- [npm v9.6.0](https://nodejs.org/en/download/)

This ensures that the application runs smoothly and efficiently.

## Configuration

### Server

To run the server locally, you might need to change the default server configuration in specific files:

- `config/production.[json/js]` - Configuration used in production environment.
- `config/default.json` - Default server configuration file and will be used as fallback for other environment-specific configuration files.

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

### Client

To run the client locally, you might need to change the following configuration in specific files:

- `.env.local` - Configuration used by the local development server.
- `.env` - Configuration used by default and will be used as fallback if some variables are not defined in `.env.local`.

Default configuration:

```bash
GENERATE_SOURCEMAP=false
REACT_APP_BASE_TITLE=Surveo                                     # title of the application
REACT_APP_FEATHERS_SERVER_URL=                                  # feathers server url
REACT_APP_FEATHERS_JWT_STORAGE_KEY=feathers-jwt                 # local storage key for feathers jwt
REACT_APP_AUTHENTICATION_SLICE_STORAGE_KEY=authentication-slice # local storage key for authentication slice
REACT_APP_GOOGLE_RECAPTCHA_KEY=                                 # google recaptcha key
```

## Run locally

Clone the project

```bash
  git clone https://github.com/r1pk/surveo.git
```

### Server

Go to the server directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

### Client

Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the client

```bash
  npm start
```

## More information

For more information about the project, please refer to specific README files in the `client` and `server` directories.

- [Client README](./client/README.md)
- [Server README](./server/README.md)

## Demo

Application is automatically deployed using [Vercel](https://vercel.com).

[Surveo Live Demo](https://surveo.vercel.app/)

## Authors

- [@r1pk](https://github.com/r1pk)

## License

[MIT](https://choosealicense.com/licenses/mit/)
