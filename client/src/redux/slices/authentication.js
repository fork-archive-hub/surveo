import { createSlice } from '@reduxjs/toolkit';

import { authentication } from '../middlewares/feathers/actions';

const slice = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: false,
    user: {},
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
