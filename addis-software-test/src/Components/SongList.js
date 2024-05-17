/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

const songListStyle = css`
  padding: 10px;
  border: 1px solid #ddd;
  margin: 5px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
`;

const SongList = ({ onEditRequest }) => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs.songs);

  const handleDelete = (id) => {
    dispatch({ type: 'songs/deleteRequest', payload: id });
  };

  return (
    <div>
      {songs.map(song => (
        <div key={song.id} css={songListStyle}>
          <span>{song.title}</span>
          <div>
            <button onClick={() => onEditRequest(song)}>Edit</button>
            <button onClick={() => handleDelete(song.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongList;
