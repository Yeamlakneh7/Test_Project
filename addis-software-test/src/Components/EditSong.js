/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const formStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 10px 0;

  input, button {
    margin: 5px 0;
    padding: 8px;
    border: 1px solid #ddd;
  }
`;

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
    dispatch({ type: 'songs/updateRequest', payload: { ...selectedSong, title } });
    onEditComplete();
  };

  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Update Song</button>
    </form>
  );
};

export default EditSong;
