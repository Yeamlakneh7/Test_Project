import axios from 'axios';

// Define the base URL for our API
axios.defaults.baseURL = 'http://localhost:3001';

export const getSongs = async () => await axios.get('/songs');
export const getSongById = async (id) => await axios.get(`/songs/${id}`);
export const createSong = async (song) => await axios.post('/songs', song);
export const updateSongById = async (id, updatedSong) => await axios.put(`/songs/${id}`, updatedSong);
export const deleteSongById = async (id) => await axios.delete(`/songs/${id}`);
