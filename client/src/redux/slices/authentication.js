import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const { login, logout } = slice.actions;
export default slice.reducer;
