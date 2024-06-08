//src/features/songs/songsSaga.js

import { put, call, takeEvery } from 'redux-saga/effects';
import { ADD_SONG_REQUEST, UPDATE_SONG_REQUEST, DELETE_SONG_REQUEST } from './songsActionTypes';
import { songAdded, songUpdated, songDeleted, setLoading, setError, clearError } from './songsSlice';

function* addSong(action) {
  try {
    yield put(setLoading());
    // Add song logic...
    yield put(clearError());
  } catch (e) {
    yield put(setError('Failed to add song.'));
    console.error(e);
  }
}

// Similarly for updateSong and deleteSong...

function* songsSaga() {
  yield takeEvery(ADD_SONG_REQUEST, songAdded);
  yield takeEvery(UPDATE_SONG_REQUEST, songUpdated);
  yield takeEvery(DELETE_SONG_REQUEST, songDeleted);
}

export default songsSaga;
