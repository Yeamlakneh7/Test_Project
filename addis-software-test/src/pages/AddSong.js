// src/Pages/AddSong.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../features/songs/songsSlice';  // Import the addSong action
import { styles } from '../Components/Emotions';

const AddSong = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [img, setImg] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [error, setError] = useState({}) 
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {}
    if (!title) {
      newError.title = "Music title required"
      
    }
    else if (!artist) {
      newError.artist = "Artist name required"
      
    }
    else if (!img) {
      newError.img = "Cover image required"
    }

    else if (!audioUrl) {
      
      newError.audioUrl = "audioUrl required"
    }

    setError(newError);

    if (Object.keys(newError).length > 0) {
      return;
    }
    dispatch(addSong({ title, artist, img, audioUrl }));  // Dispatch the addSong action
    setTitle('');
    setArtist('');
    setImg('');
    setAudioUrl('');

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
        {error.title && <p className={ styles.red }>{error.title}</p>}
        <input
          className={styles.inputStyle}
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        {error.artist && <p className={styles.red}>{error.artist}</p>}
        <input
          className={styles.inputStyle}
          type="text"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        {error.img && <p className={styles.red}>{error.img}</p>}
        <input
          className={styles.inputStyle}
          type="text"
          placeholder="Audio URL"
          value={audioUrl}
          onChange={(e) => setAudioUrl(e.target.value)}
        />
        {error.audioUrl && <p className={styles.red}>{error.audioUrl}</p>}
        <button className={styles.buttonStyle} type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default AddSong;
