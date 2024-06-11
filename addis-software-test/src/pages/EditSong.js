// src/Pages/EditSong.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { UPDATE_SONG_REQUEST } from '../features/songs/songsActionTypes';
import { styles } from '../Components/Emotions';

const EditSong = ({ onEditComplete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const song = useSelector(state => state.songs.songs.find(song => song.id === id));

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [img, setImg] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [error, setError] = useState({}); // Add audio URL state

  useEffect(() => {
    if (song) {
      setTitle(song.title);
      setArtist(song.artist);
      setImg(song.img);
      setAudioUrl(song.audioUrl); // Set audio URL
    }
  }, [song]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};
    if (!title) newError.title = "Music title required";
    if (!artist) newError.artist = "Artist name required";
    if (!img) newError.img = "Cover image required";
    if (!audioUrl) newError.audioUrl = "Audio URL required";
    
    setError(newError);

    if (Object.keys(newError).length > 0) return;

    // In handleSubmit
    dispatch({ type: UPDATE_SONG_REQUEST, payload:{ id, title, artist, img, audioUrl } });
    if (onEditComplete) {
      onEditComplete();
    }
    navigate('/');
  };

  if (!song) {
    return <p>Enter Correct Id number of your music.</p>;
  }

  return (
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
      <button className={styles.buttonStyle} type="submit">Update Song</button>
    </form>
  );
};

export default EditSong;
