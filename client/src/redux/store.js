import { configureStore } from '@reduxjs/toolkit';

import authentication from './slices/authentication';

import { sessionManager } from './middlewares/sessionManager';

export const store = configureStore({
  reducer: {
    authentication: authentication,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sessionManager),
});
