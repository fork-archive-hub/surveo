import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    setAuthenticatedUser: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  },
});

export const { setAuthenticatedUser } = slice.actions;
export default slice.reducer;
