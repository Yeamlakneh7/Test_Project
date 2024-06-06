// src/Components/SongList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SongItems from './SongItems';
import { fetchSongs } from '../features/songs/songsSlice';
import { styles } from './Emotions';

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs.songs);
  const status = useSelector(state => state.songs.status);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

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
