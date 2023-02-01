import { createSlice } from '@reduxjs/toolkit';

const authTokenExists = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_STORAGE_KEY) !== null;
const lastLoggedUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_AUTH_USER_STORAGE_KEY));

const slice = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: authTokenExists,
    user: authTokenExists ? lastLoggedUser : {},
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
