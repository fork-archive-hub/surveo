import { createListenerMiddleware } from '@reduxjs/toolkit';

import { authentication } from '../slices/authentication';

const listenerMiddleware = createListenerMiddleware();
const listeners = [...authentication.listeners];

listeners.forEach((listener) => {
  listenerMiddleware.startListening(listener);
});

export const actionListener = listenerMiddleware.middleware;
