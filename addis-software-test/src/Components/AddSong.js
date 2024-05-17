/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
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

const AddSong = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'songs/addRequest', payload: { title } });
    setTitle('');
  };

  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddSong;
