import { configureStore } from '@reduxjs/toolkit';

import authentication from './slices/authentication';

export const store = configureStore({
  reducer: {
    authentication: authentication,
  },
});
