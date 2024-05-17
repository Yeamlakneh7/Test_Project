// src/features/songs/songsSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { songAdded, songUpdated, songDeleted } from './songsSlice';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function* fetchSongs() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put({ type: 'songs/fetchSuccess', payload: response.data });
  } catch (error) {
    console.error('Error fetching songs:', error);
  }
}

function* addSong(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put(songAdded(response.data));
  } catch (error) {
    console.error('Error adding song:', error);
  }
}

function* updateSong(action) {
  try {
    const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload);
    yield put(songUpdated(response.data));
  } catch (error) {
    console.error('Error updating song:', error);
  }
}

function* deleteSong(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(songDeleted(action.payload));
  } catch (error) {
    console.error('Error deleting song:', error);
  }
}

function* songsSaga() {
  yield takeEvery('songs/fetchRequest', fetchSongs);
  yield takeEvery('songs/addRequest', addSong);
  yield takeEvery('songs/updateRequest', updateSong);
  yield takeEvery('songs/deleteRequest', deleteSong);
}

export default songsSaga;
