// src/features/songs/songsSaga.js
import { takeEvery, call, put } from 'redux-saga/effects';
import { ADD_SONG_REQUEST, UPDATE_SONG_REQUEST, DELETE_SONG_REQUEST } from './songsActionTypes'; // Add this import statement
import { songAdded, songUpdated, songDeleted } from './songsSlice';
import axios from 'axios';
import { setError, clearError } from './songsSlice';

let nextId = 1;

function* addSong(action) {
    try {
      // add song logic...
    } catch (e) {
      yield put(setError('Failed to add song.'));
      console.error(e);
    } finally {
      yield put(clearError());
    }
  }
function* updateSong(action) {
  try {
    const response = yield call(axios.put, `http://localhost:3001/songs/${action.payload.id}`, action.payload);
    yield put(songUpdated(response.data));
  } catch (e) {
    console.error(e);
  }
}

function* deleteSong(action) {
  try {
    yield call(axios.delete, `http://localhost:3001/songs/${action.payload}`);
    yield put(songDeleted(action.payload));
  } catch (e) {
    console.error(e);
  }
}

function* songsSaga() {
  yield takeEvery(ADD_SONG_REQUEST, addSong); // Use the imported action types here
  yield takeEvery(UPDATE_SONG_REQUEST, updateSong); // Use the imported action types here
  yield takeEvery(DELETE_SONG_REQUEST, deleteSong); // Use the imported action types here
}

export default songsSaga;
