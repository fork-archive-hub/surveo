# Surveo-client

Directory containing client-side application for [Surveo project](https://github.com/r1pk/surveo). Surveo client is built using technologies such as [React](https://reactjs.org/), [React-Router](https://reactrouter.com), [Redux](https://redux.js.org/), [Material-UI](https://mui.com/).

## Project structure

```bash
client/               # root directory
├─ public/            # static files
├─ src/               # application source code
│  ├─ apis/           # api related files
│  ├─ components/     # reusable components grouped by purpose
│  ├─ features/       # functions, components, schemas grouped by feature
│  ├─ hooks/          # custom hooks
│  ├─ layouts/        # layout components grouped by layout type
│  ├─ pages/          # page components
│  ├─ redux/          # redux related files
│  ├─ themes/         # theme related files (e.g. colors, fonts)
│  ├─ App.jsx         # application root component
│  ├─ AppRoutes.jsx   # application routes
│  ├─ index.js        # application entry point
├─ .env               # default environment variables
```

## Environment Variables

To run the application locally, you might need to change the following configuration in specific files:

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

## Run Locally

Clone the project

```bash
  git clone https://github.com/r1pk/surveo.git
```

Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Run the project locally

```bash
  npm start
```

## Authors

- [@r1pk](https://github.com/r1pk)
