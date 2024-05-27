// src/Components/AddSong.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { songAdded } from '../features/songs/songsSlice'; // Import the action creator
import { styles } from "../Components/Emotions"

const AddSong = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [img, setImg] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(songAdded({ title, artist, img })); // Dispatch the action using the action creator
    setTitle('');
    setArtist('');
    setImg('');
  };

  return (
    <div>
      <form className={styles.formStyle} onSubmit={handleSubmit}>
        <input
          className={styles.inputStyle}
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={styles.inputStyle}
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          className={styles.inputStyle}
          type="text"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button className={styles.buttonStyle} type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default AddSong;
