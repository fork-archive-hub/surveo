import feathers from '@feathersjs/client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

import ErrorHandler from './lib/ErrorHandler';

import AuthenticationModule from './modules/AuthenticationModule';
import SubscriptionModule from './modules/SubscriptionModule';
import SurveyModule from './modules/SurveyModule';
import UserModule from './modules/UserModule';
import VoteModule from './modules/VoteModule';

export const middleware = (store) => {
  const client = feathers();
  const socket = io(process.env.REACT_APP_FEATHERS_SERVER_URL);

  const modules = [
    new AuthenticationModule(client, store),
    new SubscriptionModule(client, store),
    new SurveyModule(client, store),
    new UserModule(client, store),
    new VoteModule(client, store),
  ];
  const availableActions = modules.reduce((actions, module) => ({ ...actions, ...module.getModuleActions() }), {});

  client.configure(socketio(socket));
  client.configure(feathers.authentication({ storage: window.localStorage }));

  modules.forEach((module) => {
    if (module.initializeEventListeners) {
      module.initializeEventListeners();
    }
  });

  return (next) => async (action) => {
    if (!Object.prototype.hasOwnProperty.call(availableActions, action.type)) {
      return next(action);
    }

    try {
      const result = await availableActions[action.type](action);

      if (result) {
        return next(result);
      }
    } catch (error) {
      return next({ ...action, error: ErrorHandler.stringifyError(error) });
    }
  };
};
