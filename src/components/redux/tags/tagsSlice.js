import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const fetchTags = createAsyncThunk(
  'tags/fetchTags',
  async ({ page, pageSize, sortField, sortOrder }) => {
    const response = await axios.get(
      `https://api.stackexchange.com/2.2/tags?site=stackoverflow&order=${sortOrder}&sort=${sortField}&page=${page}&pagesize=${pageSize}&key=Qapmp7A0C9E4csyqdryPaw((`
    );
    return response.data;
  }
);

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default tagsSlice.reducer;
