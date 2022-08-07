import { createSlice } from '@reduxjs/toolkit';

import { authentication } from '../middlewares/feathers/actions';

const slice = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: false,
    authenticatedUser: {},
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

    builder.addCase(authentication.onLogin.type, (state, action) => {
      state.isAuthenticated = true;
      state.authenticatedUser = action.payload.user;
    });

    builder.addCase(authentication.onLogout.type, (state, action) => {
      state.isAuthenticated = false;
      state.authenticatedUser = {};
    });
  },
});

export default slice.reducer;
