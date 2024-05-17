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
    }
  }
});

export const { songAdded, songUpdated, songDeleted } = songsSlice.actions;
export default songsSlice.reducer;
