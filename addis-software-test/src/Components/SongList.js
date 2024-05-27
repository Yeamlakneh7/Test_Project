// src/Components/SongList.js
import React from 'react';
import { useSelector } from 'react-redux';
import SongItems from './SongItems';
import { styles } from './Emotions';

const SongList = () => {
  const songs = useSelector(state => state.songs.songs);

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
