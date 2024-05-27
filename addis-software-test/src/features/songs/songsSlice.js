// src/features/songs/songsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],
  status: 'idle',
  error: null
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    songAdded: (state, action) => {
      state.songs.push(action.payload);
    },
    songUpdated: (state, action) => {
      const index = state.songs.findIndex(song => song.id === action.payload.id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    songDeleted: (state, action) => {
      state.songs = state.songs.filter(song => song.id !== action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const { songAdded, songUpdated, songDeleted, setError, clearError } = songsSlice.actions;
export default songsSlice.reducer;
