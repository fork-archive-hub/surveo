# Surveo-client

Surveo-client is a responsive web application written in [React](https://reactjs.org/), allowing users to create online surveys with basic security measures.  
Application is built using [Redux](https://redux.js.org/), [React Router](https://reacttraining.com/react-router/), [Material UI](https://mui.com/).

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
REACT_APP_BASE_TITLE=Surveo                                     # title of the application
REACT_APP_FEATHERS_SERVER_URL=                                  # feathers server url
REACT_APP_FEATHERS_JWT_STORAGE_KEY=feathers-jwt                 # local storage key for feathers jwt
REACT_APP_AUTHENTICATION_SLICE_STORAGE_KEY=authentication-slice # local storage key for authentication slice
REACT_APP_GOOGLE_RECAPTCHA_KEY=                                 # google recaptcha key
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
   |-- apis                     # api related folders and files
   |   |-- group                # group of files related to a single api
   |   |   |-- index.js         # exports main api instance from the folder
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
