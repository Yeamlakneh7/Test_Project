// src/Components/AddSong.js

import { css } from '@emotion/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { songAdded } from '../features/songs/songsSlice'; // Import the action creator

const formStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 10px auto;
`;

const inputStyle = css`
  margin: 5px 0;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const buttonStyle = css`
  margin: 5px 0;
  padding: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AddSong = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(songAdded({ title })); // Dispatch the action using the action creator
    setTitle('');
  };

  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <input
        css={inputStyle}
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button css={buttonStyle} type="submit">Add Song</button>
    </form>
  );
};

export default AddSong;
