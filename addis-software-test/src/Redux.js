// import axios from 'axios';

// // Define the base URL for our API
// axios.defaults.baseURL = 'http://localhost:3001';

// export const getSongs = async () => await axios.get('/songs');
// export const getSongById = async (id) => await axios.get(`/songs/${id}`);
// export const createSong = async (song) => await axios.post('/songs', song);
// export const updateSongById = async (id, updatedSong) => await axios.put(`/songs/${id}`, updatedSong);
// export const deleteSongById = async (id) => await axios.delete(`/songs/${id}`);



// //src/app/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import songsReducer from '../features/songs/songsSlice';
// import songsSaga from '../features/songs/songsSaga';

// const sagaMiddleware = createSagaMiddleware();

// export const store = configureStore({
//   reducer: {
//     songs: songsReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
// });

// sagaMiddleware.run(songsSaga);



// // src/Components/NavBar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { styles } from './Emotions'
// import logo from '../Images/music logo design.png'


// const NavBar = () => {
//   return (
//     <nav className={styles.navStyle}>
//       <div className={styles.nav_center}>
//         <Link to='/'>
//         <img src={logo} className={styles.logo} alt={"Logo"}/>
//         </Link>
//         <Link to='/'>
//           <h3 className={styles.h4style}>MusicStream</h3>
//         </Link>
//       </div>

//       <div className={styles.nav_container}>
        
//           <Link to='/add'>
//             <h4 className={styles.h5style}>Add Song</h4>
//           </Link>
        
//       </div>
//     </nav>
//   );
// };

// export default NavBar;



// // src/Components/SongList.js
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import SongItems from './SongItems';
// import { fetchSongs } from '../features/songs/songsSlice';
// import { styles } from './Emotions';

// const SongList = () => {
//   const dispatch = useDispatch();
//   const songs = useSelector(state => state.songs.songs);
//   const status = useSelector(state => state.songs.status);

//   useEffect(() => {
//     dispatch(fetchSongs());
//   }, [dispatch]);

//   if (status === 'loading') {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className={styles.listStyle2}>
//       {songs.map(song => (
//         <SongItems
//           key={song.id}
//           id={song.id}
//           img={song.img}
//           title={song.title}
//           artist={song.artist}
//         />
//       ))}
//     </div>
//   );
// };

// export default SongList;



// //src/components/songItems.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { DELETE_SONG_REQUEST } from '../features/songs/songsActionTypes';
// import { styles } from './Emotions';

// const SongItems = ({ id, img, title, artist, audioUrl }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleRemove = (e) => {
//     e.stopPropagation();
//     dispatch({ type: DELETE_SONG_REQUEST, payload: id });
//   };

//   const handleEdit = (e) => {
//     e.stopPropagation();
//     navigate('/edit/' + id);
//   };

//   const handleClick = () => {
//     navigate('/songs/' + id);
//   };

//   return (
//     <div className={styles.cardStyle} onClick={handleClick}>
//       <div className="image">
//         <img className={styles.image} src={img} alt={title} />
//       </div>
//       <div className={styles.infoStyle}>
//         <div className={styles.titleStyle}>♫ {title}</div>
//         <div className={styles.artistStyle}>🎸 {artist}</div>
//         <div>
//           <button className={styles.buttonStyle2} onClick={handleEdit}>Edit</button>
//           <button className={styles.buttonStyle2} onClick={handleRemove}>Delete</button>
//           {audioUrl && (
//             <audio controls className={styles.cardStyle}>
//               <source src={audioUrl} type="audio/mpeg" />
//               Your browser does not support the audio element.
//             </audio>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SongItems;




// //src/components/Emotion.js

// import { css } from '@emotion/css';

// export const styles = {
  
//   container: css`
//     font-family: 'Arial', sans-serif;
//     text-align: center;
//     background-color: #f4f4f4;
//     padding: 20px;
//     border-radius: 8px;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   `,
//   title: css`
//     color: #333;
//     font-size: 2em;
//     margin-bottom: 20px;
//   `,
//   subTitle: css`
//     color: #666;
//     font-size: 1.5em;
//     margin-bottom: 15px;
//   `,
//   paragraph: css`
//     color: #777;
//     font-size: 1em;
//   `,
//   inputStyle: css`
//     margin: 5px 0;
//     padding: 8px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//   `,

//   buttonStyle: css`
//     margin: 5px 0;
//     padding: 8px;
//     background-color: #007bff;
//     color: #fff;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//   `, 
//   buttonStyle2 : css`
//     margin-left: auto;
//     padding: 5px 10px;
//     background-color: #007bff;
//     color: #fff;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
// `,
//   formStyle: css`
//     display: flex;
//     flex-direction: column;
//     max-width: 300px;
//     margin: 10px 0;

//   `,
  
//   listStyle : css`
//     list-style: none;
//     padding: 0;
//     margin: 20px 0;
//   `,
//   listStyle2 : css`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin: 30px;
// `,

//   itemStyle : css`
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     border-bottom: 1px solid #ddd;
//   `, 

//   navStyle : css`
//     background-color: #333;
//     color: white;
//     margin: 0;
//     padding: 1rem;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   `,
//   nav_center : css`
//     display: flex;
//     align-items: center;
//   `, 
    
//   nav_container: css` {
//     display: flex;
//     align-items: center;
//   `,

//   amount_container: css`
//     margin-left: 1rem;
//   `,

//   h4style : css`
//     margin: 0;
//     color: white;
//     text-decoration: none
//   `,
//   h5style: css`
//     margin: 0;
//     color: white;
//     cursor: pointer;
//     text-decoration: none;

//     &:hover {
//       color: #ddd;
//     }
//   `, 
//   logo : css`
//     width: 50px;
//     height: 50px;
//   `,

//   cardStyle : css`
//     width: 200px;
//     margin: 10px;
//     border: 1px solid #ddd;
//     border-radius: 8px;
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `, 

//   image : css`
//     width: 100%;
//     height: 200px;
//     object-fit: cover;
// `,
//   infoStyle: css`
//     padding: 10px;
//     text-align: center;
//   `,

//   // for details
//   detailsContainerStyle: css`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 20px;
//   `,

//   imageStyle : css`
//     height: 300px;
//     width: 300px;
//     object-fit: cover;
//     border-radius: 8px;
//     margin-bottom: 20px;
//   `,

//   titleStyle : css`
//     font-size: 19px;
//     font-weight: bold;
//     color: #333;
//   `,

//   artistStyle : css`
//     font-size: 16px;
//     color: #555;
//     margin: 5px
//   `,
  
//   red : css`
//   color: red
// `

//   }



//   // src/features/songs/songsActionTypes.js
// export const ADD_SONG_REQUEST = 'songs/addRequest';
// export const UPDATE_SONG_REQUEST = 'songs/updateRequest';
// export const DELETE_SONG_REQUEST = 'songs/deleteRequest';




// import { put, call, takeEvery } from 'redux-saga/effects';
// import { ADD_SONG_REQUEST, UPDATE_SONG_REQUEST, DELETE_SONG_REQUEST } from './songsActionTypes';
// import { songAdded, songUpdated, songDeleted, setLoading, setError, clearError } from './songsSlice';
// import { getSongs, createSong, updateSongById, deleteSongById } from '../../api/songsApi';

// function* addSong(action) {
//   try {
//     yield put(setLoading());
//     const response = yield call(createSong, action.payload);
//     yield put(songAdded(response.data));
//     yield put(clearError());
//   } catch (e) {
//     yield put(setError('Failed to add song.'));
//     console.error(e);
//   }
// }

// function* updateSong(action) {
//   try {
//     yield put(setLoading());
//     const response = yield call(updateSongById, action.payload.id, action.payload);
//     yield put(songUpdated(response.data));
//     yield put(clearError());
//   } catch (e) {
//     yield put(setError('Failed to update song.'));
//     console.error(e);
//   }
// }

// function* deleteSong(action) {
//   try {
//     yield put(setLoading());
//     yield call(deleteSongById, action.payload);
//     yield put(songDeleted(action.payload));
//     yield put(clearError());
//   } catch (e) {
//     yield put(setError('Failed to delete song.'));
//     console.error(e);
//   }
// }

// function* songsSaga() {
//   yield takeEvery(ADD_SONG_REQUEST, addSong);
//   yield takeEvery(UPDATE_SONG_REQUEST, updateSong);
//   yield takeEvery(DELETE_SONG_REQUEST, deleteSong);
// }

// export default songsSaga;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getSongs } from '../../api/songsApi';

// export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
//   const response = await getSongs();
//   return response.data;
// });

// const initialState = {
//   songs: [],
//   status: 'idle',
//   error: null,
// };

// const songsSlice = createSlice({
//   name: 'songs',
//   initialState,
//   reducers: {
//     songAdded: (state, action) => {
//       state.songs.push(action.payload);
//       state.status = 'succeeded';
//     },
//     songUpdated: (state, action) => {
//       const index = state.songs.findIndex((song) => song.id === action.payload.id);
//       if (index !== -1) {
//         state.songs[index] = action.payload;
//         state.status = 'succeeded';
//       }
//     },
//     songDeleted: (state, action) => {
//       state.songs = state.songs.filter((song) => song.id !== action.payload);
//       state.status = 'succeeded';
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//     setLoading: (state) => {
//       state.status = 'loading';
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSongs.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchSongs.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.songs = action.payload;
//       })
//       .addCase(fetchSongs.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { songAdded, songUpdated, songDeleted, setError, clearError, setLoading } = songsSlice.actions;
// export default songsSlice.reducer;




// // src/Pages/AddSong.js
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { ADD_SONG_REQUEST } from '../features/songs/songsActionTypes'; // Import the ADD_SONG_REQUEST action type
// import { styles } from '../Components/Emotions';

// const AddSong = () => {
//   const [title, setTitle] = useState('');
//   const [artist, setArtist] = useState('');
//   const [img, setImg] = useState('');
//   const [audioUrl, setAudioUrl] = useState('');
//   const [error, setError] = useState({}) 
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newError = {}
//     if (!title) {
//       newError.title = "Music title required"
//     }else if (!artist) {
//       newError.artist = "Artist name required" 
//     }else if (!img) {
//       newError.img = "Cover image required"
//     }else if (!audioUrl) { 
//       newError.audioUrl = "audioUrl required"
//     }

//     setError(newError);

//     if (Object.keys(newError).length > 0) {
//       return;
//     }
//     dispatch({ type: ADD_SONG_REQUEST, payload: { title, artist, img, audioUrl } }); // Dispatch the ADD_SONG_REQUEST action
//     setTitle('');
//     setArtist('');
//     setImg('');
//     setAudioUrl('');
//     setError({});
//   };

//   return (
//     <div>
//       <form className={styles.formStyle} onSubmit={handleSubmit}>
//         <input
//           className={styles.inputStyle}
//           type="text"
//           placeholder="Song Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         {error.title && <p className={ styles.red }>{error.title}</p>}
//         <input
//           className={styles.inputStyle}
//           type="text"
//           placeholder="Artist"
//           value={artist}
//           onChange={(e) => setArtist(e.target.value)}
//         />
//         {error.artist && <p className={styles.red}>{error.artist}</p>}
//         <input
//           className={styles.inputStyle}
//           type="text"
//           placeholder="Image URL"
//           value={img}
//           onChange={(e) => setImg(e.target.value)}
//         />
//         {error.img && <p className={styles.red}>{error.img}</p>}
//         <input
//           className={styles.inputStyle}
//           type="text"
//           placeholder="Audio URL"
//           value={audioUrl}
//           onChange={(e) => setAudioUrl(e.target.value)}
//         />
//         {error.audioUrl && <p className={styles.red}>{error.audioUrl}</p>}
//         <button className={styles.buttonStyle} type="submit">Add Song</button>
//       </form>
//     </div>
//   );
// };

// export default AddSong;



// // src/Pages/EditSong.js
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { UPDATE_SONG_REQUEST } from '../features/songs/songsActionTypes';
// import { styles } from '../Components/Emotions';

// const EditSong = ({ onEditComplete }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const song = useSelector(state => state.songs.songs.find(song => song.id === id));

//   const [title, setTitle] = useState('');
//   const [artist, setArtist] = useState('');
//   const [img, setImg] = useState('');
//   const [audioUrl, setAudioUrl] = useState('');
//   const [error, setError] = useState({}); // Add audio URL state

//   useEffect(() => {
//     if (song) {
//       setTitle(song.title);
//       setArtist(song.artist);
//       setImg(song.img);
//       setAudioUrl(song.audioUrl); // Set audio URL
//     }
//   }, [song]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newError = {};
//     if (!title) newError.title = "Music title required";
//     if (!artist) newError.artist = "Artist name required";
//     if (!img) newError.img = "Cover image required";
//     if (!audioUrl) newError.audioUrl = "Audio URL required";
    
//     setError(newError);

//     if (Object.keys(newError).length > 0) return;

//     // In handleSubmit
//     dispatch({ type: UPDATE_SONG_REQUEST, payload:{ id, title, artist, img, audioUrl } });
//     if (onEditComplete) {
//       onEditComplete();
//     }
//     navigate('/');
//   };

//   if (!song) {
//     return <p>Enter Correct Id number of your music.</p>;
//   }

//   return (
//     <form className={styles.formStyle} onSubmit={handleSubmit}>
//       <input
//         className={styles.inputStyle}
//         type="text"
//         placeholder="Song Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       {error.title && <p className={ styles.red }>{error.title}</p>}
//       <input
//         className={styles.inputStyle}
//         type="text"
//         placeholder="Artist"
//         value={artist}
//         onChange={(e) => setArtist(e.target.value)}
//       />
//       {error.artist && <p className={styles.red}>{error.artist}</p>}
//       <input
//         className={styles.inputStyle}
//         type="text"
//         placeholder="Image URL"
//         value={img}
//         onChange={(e) => setImg(e.target.value)}
//       />
//       {error.img && <p className={styles.red}>{error.img}</p>}
//       <input
//         className={styles.inputStyle}
//         type="text"
//         placeholder="Audio URL"
//         value={audioUrl}
//         onChange={(e) => setAudioUrl(e.target.value)}
//       />
//       {error.audioUrl && <p className={styles.red}>{error.audioUrl}</p>}
//       <button className={styles.buttonStyle} type="submit">Update Song</button>
//     </form>
//   );
// };

// export default EditSong;




// //src/Pages/SongDetails.js

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { styles } from '../Components/Emotions';

// const SongDetails = () => {
//   const { id } = useParams();
//   const song = useSelector(state => state.songs.songs.find(song => song.id === id));

//   if (!song) {
//     return <div>Song not found</div>;
//   }

//   return (
//     <div className={styles.detailsContainerStyle}>
//       <img className={styles.imageStyle} src={song.img} alt={song.title} />
//       <h2 className={styles.titleStyle}>♫ {song.title}</h2>
//       <p className={styles.artistStyle}>🎸 {song.artist}</p>
//       {song.audioUrl && (
//         <audio controls>
//           <source src={song.audioUrl} type="audio/mpeg" />
//           Your browser does not support the audio element.
//         </audio>
//       )}
//     </div>
//   );
// };

// export default SongDetails;


// {
//   "songs": [
//     {
//       "id": "1676057071714",
//       "title": "We win together",
//       "artist": "Unknown singer",
//       "img": "https://i.ebayimg.com/images/g/CpkAAOSwiS9iDGL7/s-l500.png",
//       "audioUrl": "https://www.google.com/music8393"
//     },
//     {
//       "id": "1676553104204",
//       "title": "we won together",
//       "artist": "No Name",
//       "img": "https://i.pinimg.com/564x/cc/65/5f/cc655f4c3791ee1b0b2e5867ddf6b036.jpg",
//       "audioUrl": "ochala"
//     }
//   ]
// }


// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SongList from './Components/SongList';
// import SongDetails from './pages/SongDetails';
// import EditSong from './pages/EditSong';
// import AddSong from './pages/AddSong';
// import NavBar from './Components/NavBar';

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<SongList />} />
//         <Route path="/songs/:id" element={<SongDetails />} />
//         <Route path="/edit/:id" element={<EditSong />} />
//         <Route path="/add" element={<AddSong />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


