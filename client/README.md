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
REACT_APP_FEATHERS_SERVER_URL=    # URL of the feathers server
REACT_APP_GOOGLE_RECAPTCHA_KEY=   # Google reCaptcha key
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
public                     # folder containing static files such as index.html
src
   |-- components          # shared components used across the entire application
   |   |-- group           # group of related components
   |-- features            # feature based modules
   |   |-- feature         # feature module
   |   |   |-- components  # feature specific components
   |   |   |-- schemas     # schemas used to validate form data
   |   |   |-- templates   # templates used as default values for form fields
   |   |   |-- utils       # utility functions used across feature
   |   |   |-- index.js    # exports of all required elements from specific feature
   |-- redux
   |   |-- middlewares     # middlewares used by the application
   |   |-- slices          # redux slices used by the application
   |   |-- store.js        # redux store used by the application
   |   |-- index.js        # exports of all required elements from redux
   |-- routes
   |   |-- common.js       # routes available for everyone
   |   |-- protected.js    # routes available for authenticated users
   |   |-- public.js       # routes available for unauthenticated users
   |   |-- index.js        # combined routes for the application
   |-- pages               # pages used by the application
   |-- Providers.js        # file containing all providers used by the application
   |-- App.js              # main application component 
   |-- index.js            # function that renders the application     
   |-- theme.js            # theme options used by the application      
   |-- .env                # environment variables used by the application                
```

## Author

- Patryk [r1pk](https://github.com/r1pk) Krawczyk