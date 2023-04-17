# Surveo

Surveo is a responsive web application that allows users to create online surveys with basic security measures and to analyze results using multiple forms of result presentation. Surveo is built using technologies such as [React](https://reactjs.org/), [React-Router](https://reactrouter.com), [Redux](https://redux.js.org/), [Material-UI](https://mui.com/).

## Pre-requisites

Application was developed and tested in a stable environment, utilizing the following versions:

- [node.js v19.7.0](https://nodejs.org/en/)
- [npm v9.6.0](https://nodejs.org/en/download/)

This ensures that the application runs smoothly and efficiently.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

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
  git clone https://github.com/r1pk/surveo-client.git
```

Go to the project directory

```bash
  cd surveo-client
```

Install dependencies

```bash
  npm install
```

Run the project locally

```bash
  npm start
```

## Project file structure

```bash
public                            # static files
src
   |-- apis                       # api related folders and files
   |   |-- group                  # files grouped by specific api
   |   |   |-- index.js           # exports main api instance
   |-- components                 # components used across the application
   |   |-- group                  # components grouped by their purpose
   |-- features                   # feature based modules
   |   |-- feature                # resources grouped by the feature
   |   |   |-- components         # feature components
   |   |   |-- constants          # feature constants
   |   |   |-- utils              # feature utils
   |   |   |-- index.js           # exports resources from the feature folder
   |-- hooks                      # hooks used across the application
   |-- layouts                    # application layouts
   |   |-- layout                 # layout components grouped by their purpose
   |   |   |-- index.js           # exports main layout component from the folder
   |-- pages                      # page components
   |-- redux                      # redux related files
   |   |-- middlewares            # redux middlewares
   |   |-- slices                 # redux toolkit store slices
   |   |-- store.js               # store configuration
   |   |-- index.js               # exports redux related resources from the folder
   |-- themes                     # theme related files
   |   |-- base.js                # base style object containing common styles
   |   |-- dark.js                # dark theme object
   |-- App.jsx                    # main application component
   |-- AppRoutes.jsx              # available routes in the application
   |-- index.js                   # entry point of the application
.env                              # file containing environment variables
```

## Demo

Application is automatically deployed using Vercel.

[Surveo Live Demo](https://surveo.vercel.app/)

## Authors

- [@r1pk](https://github.com/r1pk)

## License

[MIT](https://choosealicense.com/licenses/mit/)
