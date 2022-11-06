import { createSlice } from '@reduxjs/toolkit';

import { authentication } from '../middlewares/feathers/actions';

const authTokenExists = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_STORAGE_KEY) !== null;
const lastLoggedUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_AUTH_USER_STORAGE_KEY));

const slice = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: authTokenExists,
    user: authTokenExists ? lastLoggedUser : {},
  },
  extraReducers: (builder) => {
    builder.addCase(authentication.onLogin.type, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    });

    builder.addCase(authentication.onLogout.type, (state, action) => {
      state.isAuthenticated = false;
      state.user = {};
    });
  },
});

export default slice.reducer;
