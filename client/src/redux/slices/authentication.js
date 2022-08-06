import { createSlice } from '@reduxjs/toolkit';

import { authentication } from '../middlewares/feathers/actions';

const slice = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: false,
    authenticatedUser: {},
  },
  reducers: {
    setAuthenticatedUser: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.authenticatedUser = action.payload.authenticatedUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authentication.login.type, (state, action) => {
      state.isAuthenticated = true;
      state.authenticatedUser = action.payload.user;
    });

    builder.addCase(authentication.logout.type, (state, action) => {
      state.isAuthenticated = false;
      state.authenticatedUser = {};
    });
  },
});

export const { setAuthenticatedUser } = slice.actions;
export default slice.reducer;
