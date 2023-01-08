# Surveo-client

Surveo-client is a responsive web application that allows you to create simple surveys. Users can create, edit and share surveys and later watch auto updated results.
Application is built with [React](https://reactjs.org/), [Redux](https://redux.js.org/), [React Router](https://reacttraining.com/react-router/), [Material UI](https://mui.com/).

## Installation

Clone Surveo-client repository

```bash
git clone https://github.com/r1pk/surveo-client.git master
```

Install all dependencies

```bash
cd ./master
npm install
```

Before running the application, configure the environment variables.

```env
GENERATE_SOURCEMAP=false
REACT_APP_BASE_TITLE=Surveo                        # Application title
REACT_APP_AUTH_TOKEN_STORAGE_KEY=auth-token        # Local storage key for auth token
REACT_APP_AUTH_USER_STORAGE_KEY=auth-user          # Local storage key for last logged user data
REACT_APP_FEATHERS_SERVER_URL=                     # Feathers server url
REACT_APP_GOOGLE_RECAPTCHA_KEY=                    # Google reCAPTCHA key
```

Run the app in development mode

```bash
npm start
```

Build the app for production to the `build` folder

```bash
npm run build
```

## Project structure

```bash
public                          # folder containing static files such as index.html
src
   |-- components               # shared components used across the entire application
   |   |-- group                # group of related components
   |-- features                 # feature based modules
   |   |-- feature              # feature module
   |   |   |-- components       # feature specific components
   |   |   |-- hooks            # feature specific hooks
   |   |   |-- schemas          # schemas used to validate form data
   |   |   |-- templates        # templates used as default values for form fields
   |   |   |-- utils            # utility functions used across feature
   |   |   |-- index.js         # exports of all required elements from specific feature
   |-- hooks                    # custom hooks used mostly by page level components
   |-- layouts                  # page layouts
   |   |-- layout               # single layout
   |   |   |-- index.js         # export main component of the layout
   |-- pages                    # pages used by the application
   |-- redux
   |   |-- middlewares          # middlewares used by the application
   |   |   |-- middleware       # middleware
   |   |   |  |-- index.js      # exports middleware and actions from the folder
   |   |-- slices               # redux slices used by the application
   |   |-- store.js             # redux store used by the application
   |   |-- index.js             # exports of all required elements from redux
   |-- routes                   # routes used by the application
   |   |-- AppRoutes.jsx        # available routes in the application
   |-- theme                    # theme used by the application
   |   |-- darkTheme.js           # dark theme object used in the application
   |-- App.js                   # main application component
   |-- index.js                 # function that renders the application
   |-- .env                     # environment variables used by the application
```

## Author

- Patryk [r1pk](https://github.com/r1pk) Krawczyk
