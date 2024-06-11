import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSongs } from '../../api/songsApi';

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await getSongs();
  return response.data;
});

const initialState = {
  songs: [],
  status: 'idle',
  error: null,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    songAdded: (state, action) => {
      state.songs.push(action.payload);
      state.status = 'succeeded';
    },
    songUpdated: (state, action) => {
      const index = state.songs.findIndex((song) => song.id === action.payload.id);
      if (index !== -1) {
        state.songs[index] = action.payload;
        state.status = 'succeeded';
      }
    },
    songDeleted: (state, action) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
      state.status = 'succeeded';
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.songs = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { songAdded, songUpdated, songDeleted, setError, clearError, setLoading } = songsSlice.actions;
export default songsSlice.reducer;
