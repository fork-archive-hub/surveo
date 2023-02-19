import { configureStore } from '@reduxjs/toolkit';

import authentication from './slices/authentication';

import { actionListener } from './middlewares/actionListener';
import { sessionManager } from './middlewares/sessionManager';

export const store = configureStore({
  reducer: {
    authentication: authentication,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionListener, sessionManager),
});
