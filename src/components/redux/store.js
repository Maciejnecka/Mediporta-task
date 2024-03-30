import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from './tags/tagsSlice';

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
  },
});
