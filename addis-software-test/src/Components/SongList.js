// src/Components/SongList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SongItems from './SongItems';
import EditSong from '../pages/EditSong'; // Import the EditSong component
import { styles } from './Emotions';

const SongList = () => {
  const [editingSong, setEditingSong] = useState(null);
  const songs = useSelector(state => state.songs.songs);

  const handleEdit = (song) => {
    setEditingSong(song);
  };

  const handleEditComplete = () => {
    setEditingSong(null);
  };

  return (
    <div className={styles.listStyle2}>
      {songs.map(song => (
        <SongItems
          key={song.id}
          id={song.id}
          img={song.img}
          title={song.title}
          artist={song.artist}
          onEdit={() => handleEdit(song)}
        />
      ))}

      {editingSong && (
        <EditSong
          selectedSong={editingSong}
          onEditComplete={handleEditComplete}
        />
      )}
    </div>
  );
};

export default SongList;
