// src/Components/EditSong.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { songUpdated } from '../features/songs/songsSlice';
import { styles } from '../Components/Emotions';

const EditSong = ({ onEditComplete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const song = useSelector(state => state.songs.songs.find(song => song.id === id));

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [img, setImg] = useState('');
  const [audioUrl, setAudioUrl] = useState(''); // Add audio URL state

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
    dispatch(songUpdated({ id, title, artist, img, audioUrl }));
    if (onEditComplete) {
      onEditComplete();
    }
    navigate('/');
  };

  if (!song) {
    return <p>Enter Id number of your music.</p>;
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
      <button className={styles.buttonStyle} type="submit">Update Song</button>
    </form>
  );
};

export default EditSong;
