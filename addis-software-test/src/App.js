// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SongList from './Components/SongList';
import SongDetails from './pages/SongDetails';
import EditSong from './pages/EditSong';
import AddSong from './pages/AddSong';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/songs/:id" element={<SongDetails />} />
        <Route path="/edit/:id" element={<EditSong />} />
        <Route path="/add" element={<AddSong />} />
      </Routes>
    </Router>
  );
}

export default App;










// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import SongList from './Components/SongList';
// import AddSong from './pages/AddSong';
// import EditSong from './pages/EditSong';
// import { css } from '@emotion/react';
// import NavBar from './Components/NavBar';
// import { Route, Routes } from 'react-router-dom';

// const appStyle = css`
//   margin: 20px;
//   font-family: Arial, sans-serif;
// `;

// const App = () => {
//   const dispatch = useDispatch();
//   const songs = useSelector(state => state.songs.songs);
//   const [selectedSong, setSelectedSong] = useState(null);

//   const handleEditRequest = (song) => {
//     setSelectedSong(song);
//   };

//   const handleEditComplete = () => {
//     setSelectedSong(null);
//   };

//   return (
//     <div css={appStyle}>
//       <h1>Song Manager</h1>
//       <AddSong />
//       {selectedSong && <EditSong selectedSong={selectedSong} onEditComplete={handleEditComplete} />}
//       <SongList onEditRequest={handleEditRequest} />
//     </div>
//   );
// };

// export default App;
