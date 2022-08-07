import { createSlice } from '@reduxjs/toolkit';

import { survey, vote } from '../middlewares/feathers/actions';

const slice = createSlice({
  name: 'survey',
  initialState: {
    data: {},
  },
  extraReducers: (builder) => {
    builder.addCase(survey.get.type, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(vote.onCreated.type, (state, action) => {
      if (state.data._id === action.payload._id) {
        state.data = action.payload;
      }
    });
  },
});

export default slice.reducer;
