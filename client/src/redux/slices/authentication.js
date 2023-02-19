import { createSlice } from '@reduxjs/toolkit';

const initialState = { isAuthenticated: false, user: {} };

const slice = createSlice({
  name: 'authentication',
  initialState: initialState,
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
