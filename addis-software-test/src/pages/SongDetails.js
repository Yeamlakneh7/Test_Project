import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { styles } from '../Components/Emotions';

const SongDetails = () => {
  const { id } = useParams();
  const song = useSelector(state => state.songs.songs.find(song => song.id === id));

  if (!song) {
    return <div>Song not found</div>;
  }

  return (
    <div className={styles.detailsContainerStyle}>
      <img className={styles.imageStyle} src={song.img} alt={song.title} />
      <h2 className={styles.titleStyle}>♫ {song.title}</h2>
      <p className={styles.artistStyle}>🎸 {song.artist}</p>
      {song.audioUrl && (
        <audio controls>
          <source src={song.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default SongDetails;
