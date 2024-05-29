// src/Components/SongItems.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { songDeleted } from '../features/songs/songsSlice';
import { styles } from './Emotions';

const SongItems = ({ id, img, title, artist, onEdit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (e) => {
    e.stopPropagation(); // Prevents the event from bubbling up to the parent
    dispatch(songDeleted(id));
  };

  const handleEdit = (e) => {
    e.stopPropagation(); // Prevents the event from bubbling up to the parent
    onEdit();
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
        <h2>♫ {title}</h2>
        <p>🎸 {artist}</p>
        <button className={styles.buttonStyle2} onClick={handleEdit}>Edit</button>
        <button className={styles.buttonStyle2} onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default SongItems;
