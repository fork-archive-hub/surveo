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
   |   |-- group_name           # group of related components
   |   |   |-- index.js         # exports all components from the group
   |-- features                 # feature based modules
   |   |-- feature_name         # feature module
   |   |   |-- components       # feature specific components
   |   |   |-- schemas          # schemas used to validate form data
   |   |   |-- templates        # templates used as default values for form fields
   |   |   |-- utils            # utility functions used across feature
   |   |   |-- index.js         # exports of all required elements from specific feature
   |-- hooks                    # custom hooks used mostly by page level components
   |   |-- index.js             # exports of all created hooks
   |-- layouts                  # page layouts
   |   |-- layout_name          # group of components used to create specific layout
   |   |-- index.js             # exports of all created layouts
   |-- pages                    # pages used by the application
   |-- providers                # providers used to provide data to the application
   |   |-- index.js             # exports of all created providers
   |-- redux
   |   |-- middlewares          # middlewares used by the application
   |   |-- slices               # redux slices used by the application
   |   |-- store.js             # redux store used by the application
   |   |-- index.js             # exports of all required elements from redux
   |-- routes                   # routes used by the application
   |   |-- common-routes.js     # routes available for everyone
   |   |-- protected-routes.js  # routes available for authenticated users
   |   |-- public-routes.js     # routes available for unauthenticated users
   |   |-- AppRoutes.js         # creates react element with available routes
   |   |-- index.js             # exports of all required elements from router
   |-- theme                    # theme used by the application
   |   |-- theme.js             # theme object used by the application
   |   |-- pallette.js          # pallette object containing colors used by the application
   |   |-- components.js        # components object containing style overrides for Mui components
   |   |-- index.js             # exports of all required elements from theme
   |-- App.js                   # main application component
   |-- index.js                 # function that renders the application
   |-- .env                     # environment variables used by the application
```

## Author

- Patryk [r1pk](https://github.com/r1pk) Krawczyk
