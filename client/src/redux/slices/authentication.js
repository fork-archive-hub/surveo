import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = { isAuthenticated: false, user: {} };
const persistedState = JSON.parse(localStorage.getItem(process.env.REACT_APP_AUTHENTICATION_SLICE_STORAGE_KEY));

const slice = createSlice({
  name: 'authentication',
  initialState: Object.assign({}, initialState, persistedState),
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

const listeners = [
  {
    matcher: isAnyOf(slice.actions.login, slice.actions.logout),
    effect: (action, api) => {
      localStorage.setItem(
        process.env.REACT_APP_AUTHENTICATION_SLICE_STORAGE_KEY,
        JSON.stringify(api.getState().authentication)
      );
    },
  },
];

export const authentication = {
  reducer: slice.reducer,
  actions: slice.actions,
  listeners: listeners,
};
