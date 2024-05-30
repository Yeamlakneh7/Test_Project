// src/Components/EditSong.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { songUpdated } from '../features/songs/songsSlice'; // Import the action creator
import { styles } from '../Components/Emotions';

const EditSong = ({ onEditComplete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const song = useSelector(state => state.songs.songs.find(song => song.id === id));

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    if (song) {
      setTitle(song.title);
      setArtist(song.artist);
      setImg(song.img);
    }
  }, [song]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(songUpdated({ id, title, artist, img })); // Dispatch the action using the action creator
    if (onEditComplete) {
      onEditComplete();
    }
    navigate('/'); // Navigate back to the song list
  };

  if (!song) {
    return <p>Loading...</p>;
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
      <button className={styles.buttonStyle} type="submit">Update Song</button>
    </form>
  );
};

export default EditSong;
