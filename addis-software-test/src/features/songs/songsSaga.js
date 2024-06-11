import { put, call, takeEvery } from 'redux-saga/effects';
import { ADD_SONG_REQUEST, UPDATE_SONG_REQUEST, DELETE_SONG_REQUEST } from './songsActionTypes';
import { songAdded, songUpdated, songDeleted, setLoading, setError, clearError } from './songsSlice';
import { getSongs, createSong, updateSongById, deleteSongById } from '../../api/songsApi';

function* addSong(action) {
  try {
    yield put(setLoading());
    const response = yield call(createSong, action.payload);
    yield put(songAdded(response.data));
    yield put(clearError());
  } catch (e) {
    yield put(setError('Failed to add song.'));
    console.error(e);
  }
}

function* updateSong(action) {
  try {
    yield put(setLoading());
    const response = yield call(updateSongById, action.payload.id, action.payload);
    yield put(songUpdated(response.data));
    yield put(clearError());
  } catch (e) {
    yield put(setError('Failed to update song.'));
    console.error(e);
  }
}

function* deleteSong(action) {
  try {
    yield put(setLoading());
    yield call(deleteSongById, action.payload);
    yield put(songDeleted(action.payload));
    yield put(clearError());
  } catch (e) {
    yield put(setError('Failed to delete song.'));
    console.error(e);
  }
}

function* songsSaga() {
  yield takeEvery(ADD_SONG_REQUEST, addSong);
  yield takeEvery(UPDATE_SONG_REQUEST, updateSong);
  yield takeEvery(DELETE_SONG_REQUEST, deleteSong);
}

export default songsSaga;
