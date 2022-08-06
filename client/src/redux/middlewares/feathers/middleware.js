import feathers from '@feathersjs/client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

import AuthenticationModule from './modules/AuthenticationModule';
import SurveyModule from './modules/SurveyModule';

export const middleware = (store) => {
  const client = feathers();
  const socket = io(process.env.REACT_APP_FEATHERS_SERVER_URL);

  const modules = [new AuthenticationModule(client, store), new SurveyModule(client, store)];
  const actions = modules.reduce((actions, module) => ({ ...actions, ...module.getModuleActions() }), {});

  client.configure(socketio(socket));
  client.configure(feathers.authentication({ storage: window.localStorage }));

  modules.forEach((module) => {
    if (module.initializeEventListeners) {
      module.initializeEventListeners();
    }
  });

  return (next) => async (action) => {
    if (Object.prototype.hasOwnProperty.call(actions, action.type)) {
      try {
        const result = await actions[action.type](action);

        if (result) {
          return next(result);
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      return next(action);
    }
  };
};
