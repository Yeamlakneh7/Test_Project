// src/Components/SongList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { songDeleted } from '../features/songs/songsSlice'; // Import the deleteSongRequest action

const listStyle = css`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const itemStyle = css`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const buttonStyle = css`
  margin-left: auto;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SongList = ({ onEditRequest }) => {
  const songs = useSelector(state => state.songs.songs);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(songDeleted(id)); // Dispatch deleteSongRequest action
  };

  const handleEdit = (song) => {
    onEditRequest(song);
  };

  return (
    <ul css={listStyle}>
      {songs.map(song => (
        <li key={song.id} css={itemStyle}>
          {song.title}
          <button css={buttonStyle} onClick={() => handleEdit(song)}>Edit</button>
          <button css={buttonStyle} onClick={() => handleDelete(song.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
