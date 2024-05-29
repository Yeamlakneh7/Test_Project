// src/Components/EditSong.js
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { songUpdated } from '../features/songs/songsSlice'; // Import the action creator
import { styles } from '../Components/Emotions';

const EditSong = ({ selectedSong, onEditComplete }) => {
  const [title, setTitle] = useState(selectedSong ? selectedSong.title : '');
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedSong) {
      setTitle(selectedSong.title);
    }
  }, [selectedSong]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(songUpdated({ ...selectedSong, title })); // Dispatch the action using the action creator
    if (onEditComplete) {
      onEditComplete();
    }
  };

  return (
    <form className={styles.formStyle} onSubmit={handleSubmit}>
      <input
        className={styles.inputStyle}
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className={styles.buttonStyle} type="submit">Update Song</button>
    </form>
  );
};

export default EditSong;
