import { configureStore } from '@reduxjs/toolkit';

import authentication from './slices/authentication';

import feathers from './middlewares/feathers';

export const store = configureStore({
  reducer: {
    authentication: authentication,
  },
  middleware: [feathers],
});
