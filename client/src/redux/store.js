import { configureStore } from '@reduxjs/toolkit';

import authentication from './slices/authentication';
import survey from './slices/survey';

import { middleware as feathers } from './middlewares/feathers';

export const store = configureStore({
  reducer: {
    authentication: authentication,
    survey: survey,
  },
  middleware: [feathers],
});
