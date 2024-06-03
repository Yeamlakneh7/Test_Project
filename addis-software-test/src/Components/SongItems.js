import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { songDeleted } from '../features/songs/songsSlice';
import { styles } from './Emotions';

const SongItems = ({ id, img, title, artist, audioUrl }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (e) => {
    e.stopPropagation();
    dispatch(songDeleted(id));
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate('/edit/' + id);
  };

  const handleClick = () => {
    navigate('/songs/' + id);
  };

  return (
    <div className={styles.cardStyle} onClick={handleClick}>
      <div className="image">
        <img className={styles.image} src={img} alt={title} />
      </div>
      <div className={styles.infoStyle}>
        <div className={styles.titleStyle}>♫ {title}</div>
        <div className={styles.artistStyle}>🎸 {artist}</div>
        <div>
          <button className={styles.buttonStyle2} onClick={handleEdit}>Edit</button>
          <button className={styles.buttonStyle2} onClick={handleRemove}>Delete</button>
          {audioUrl && (
            <audio controls className={styles.cardStyle}>
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongItems;
