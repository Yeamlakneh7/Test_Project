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
