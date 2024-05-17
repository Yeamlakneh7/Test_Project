import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import songsReducer from '../features/songs/songsSlice';
import songsSaga from '../features/songs/songsSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(songsSaga);
