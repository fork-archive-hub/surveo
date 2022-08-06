import { createSlice } from '@reduxjs/toolkit';

import { survey } from '../middlewares/feathers/actions';

const slice = createSlice({
  name: 'survey',
  initialState: {
    data: {},
  },
  reducers: {
    setSurveyData: (state, action) => {
      state.data = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(survey.get.type, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setSurveyData } = slice.actions;
export default slice.reducer;
