import { createSlice } from '@reduxjs/toolkit';

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
});

export const { setAuthenticatedUser } = slice.actions;
export default slice.reducer;
