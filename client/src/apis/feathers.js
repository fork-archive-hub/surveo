import client from '@feathersjs/client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

class FeathersClient {
  constructor() {
    this.client = client();
    this.socket = io(process.env.REACT_APP_FEATHERS_SERVER_URL);

    this.client.configure(socketio(this.socket));
    this.client.configure(
      client.authentication({
        storage: window.localStorage,
        storageKey: process.env.REACT_APP_FEATHERS_JWT_STORAGE_KEY,
      })
    );

    this.client.hooks({
      error: (context) => {
        context.error.message = this.humanizeErrorMessage(context.error);
      },
    });
  }

  humanizeErrorMessage(error) {
    const { code, message } = error;

    switch (code) {
      case 404:
        return this.humanizeNotFoundErrorMessage();
      case 401:
        return this.humanizeNotAuthenticatedErrorMessage(message);
      case 400:
        return this.humanizeBadRequestErrorMessage(message);
      default:
        return message;
    }
  }

  humanizeNotFoundErrorMessage() {
    return 'Requested resource not found';
  }

  humanizeNotAuthenticatedErrorMessage(message) {
    if (message === 'Invalid login') {
      return 'Invalid username or password';
    }

    return this.humanizeDynamicErrorMessage(message);
  }

  humanizeBadRequestErrorMessage(message) {
    if (message === 'users validation failed: username: username must be unique') {
      return 'Username is already taken';
    }

    return this.humanizeDynamicErrorMessage(message);
  }

  humanizeDynamicErrorMessage(message) {
    if (message.includes('Cast to ObjectId failed for value')) {
      return 'Provided identifier is invalid';
    }

    return message;
  }
}

export const feathers = new FeathersClient();
