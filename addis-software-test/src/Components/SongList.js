// src/Components/SongList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SongItems from './SongItems';
import EditSong from '../pages/EditSong'; // Import the EditSong component
import { styles } from './Emotions';

const SongList = () => {
  const songs = useSelector(state => state.songs.songs);
  const status = useSelector(state => state.songs.status);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.listStyle2}>
      {songs.map(song => (
        <SongItems
          key={song.id}
          id={song.id}
          img={song.img}
          title={song.title}
          artist={song.artist}
        />
      ))}
    </div>
  );
};

export default SongList;
