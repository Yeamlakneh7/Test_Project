import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SongList from './Components/SongList';
import AddSong from './Components/AddSong';
import EditSong from './Components/EditSong';
import { css } from '@emotion/react';

const appStyle = css`
  margin: 20px;
  font-family: Arial, sans-serif;
`;

const App = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs.songs);
  const [selectedSong, setSelectedSong] = useState(null);

  const handleEditRequest = (song) => {
    setSelectedSong(song);
  };

  const handleEditComplete = () => {
    setSelectedSong(null);
  };

  return (
    <div css={appStyle}>
      <h1>Song Manager</h1>
      <AddSong />
      {selectedSong && <EditSong selectedSong={selectedSong} onEditComplete={handleEditComplete} />}
      <SongList onEditRequest={handleEditRequest} />
    </div>
  );
};

export default App;
