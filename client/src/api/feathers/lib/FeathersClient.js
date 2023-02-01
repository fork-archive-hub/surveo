import feathers from '@feathersjs/client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

import ErrorParser from './ErrorParser';

import { store, actions } from '../../../redux';

class FeathersClient {
  constructor() {
    this.client = feathers();
    this.socket = io(process.env.REACT_APP_FEATHERS_SERVER_URL);

    this.client.configure(socketio(this.socket));
    this.client.configure(
      feathers.authentication({
        storage: window.localStorage,
        storageKey: process.env.REACT_APP_AUTH_TOKEN_STORAGE_KEY,
      })
    );

    this.client.hooks({
      error: (context) => {
        context.error.message = ErrorParser.humanizeError(context.error);
      },
    });

    this.client.on('authenticated', this.#handleLogin);
    this.client.on('logout', this.#handleLogout);

    if (localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_STORAGE_KEY) !== null) {
      this.client.reAuthenticate().catch(() => {
        window.location.reload();
      });
    }
  }

  #handleLogin = (data) => {
    localStorage.setItem(process.env.REACT_APP_AUTH_USER_STORAGE_KEY, JSON.stringify(data.user));
    store.dispatch(actions.authentication.login(data));
  };

  #handleLogout = () => {
    localStorage.removeItem(process.env.REACT_APP_AUTH_USER_STORAGE_KEY);
    store.dispatch(actions.authentication.logout());
  };
}

export default FeathersClient;
