import { createListenerMiddleware } from '@reduxjs/toolkit';

import { listeners as authentication } from '../slices/authentication';

const listenerMiddleware = createListenerMiddleware();
const listeners = [...authentication];

listeners.forEach((listener) => {
  listenerMiddleware.startListening(listener);
});

export const actionListener = listenerMiddleware.middleware;
