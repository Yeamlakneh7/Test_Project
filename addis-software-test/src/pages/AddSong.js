import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { songAdded } from '../features/songs/songsSlice';
import { styles } from '../Components/Emotions';

const AddSong = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [img, setImg] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(songAdded({ title, artist, img, audioUrl }));
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
        <input
          className={styles.inputStyle}
          type="text"
          placeholder="Audio URL"
          value={audioUrl}
          onChange={(e) => setAudioUrl(e.target.value)}
        />
        <button className={styles.buttonStyle} type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default AddSong;
