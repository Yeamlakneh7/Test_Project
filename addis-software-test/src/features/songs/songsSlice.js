// src/features/songs/songsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Fetch songs from the server
export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await fetch('http://localhost:3001/songs');
  const data = await response.json();
  return data;
});

// Add a new song to the server
export const addSong = createAsyncThunk('songs/addSong', async (newSong) => {
  newSong.id = uuidv4();  // Assign a unique ID to the new song
  const response = await fetch('http://localhost:3001/songs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newSong)
  });
  const data = await response.json();
  return data;
});

// Update an existing song on the server
export const updateSong = createAsyncThunk('songs/updateSong', async (updatedSong) => {
  const response = await fetch(`http://localhost:3001/songs/${updatedSong.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedSong)
  });
  const data = await response.json();
  return data;
});

// Delete a song from the server
export const deleteSong = createAsyncThunk('songs/deleteSong', async (id) => {
  await fetch(`http://localhost:3001/songs/${id}`, {
    method: 'DELETE'
  });
  return id;
});

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
      const id = action.payload;
      state.songs = state.songs.filter(song => song.id !== id);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state) => {
      state.status = 'loading';
    }
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
      })
      .addCase(addSong.fulfilled, (state, action) => {
        state.songs.push(action.payload);
      })
      .addCase(updateSong.fulfilled, (state, action) => {
        const index = state.songs.findIndex(song => song.id === action.payload.id);
        if (index !== -1) {
          state.songs[index] = action.payload;
        }
      })
      .addCase(deleteSong.fulfilled, (state, action) => {
        state.songs = state.songs.filter(song => song.id !== action.payload);
      });
  }
});

export const { songAdded, songUpdated, songDeleted, setError, clearError, setLoading } = songsSlice.actions;
export default songsSlice.reducer;
