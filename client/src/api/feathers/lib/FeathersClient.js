import feathers from '@feathersjs/client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

import ErrorParser from './ErrorParser';

class FeathersClient {
  constructor() {
    this.client = feathers();
    this.socket = io(process.env.REACT_APP_FEATHERS_SERVER_URL);

    this.client.configure(socketio(this.socket));
    this.client.configure(
      feathers.authentication({
        storage: window.localStorage,
        storageKey: process.env.REACT_APP_FEATHERS_JWT_STORAGE_KEY,
      })
    );

    this.client.hooks({
      error: (context) => {
        context.error.message = ErrorParser.humanizeError(context.error);
      },
    });
  }
}

export default FeathersClient;
