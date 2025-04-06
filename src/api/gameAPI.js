import axios from 'axios';
const API_URL = 'http://localhost:5000/api/games';

export const getAllGames = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getGameById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
export const createGame = async (gameData) => {
  try {
    const response = await axios.post(`${API_URL}`, gameData);
    return response.data;
  } catch (error) {
    console.error('Create error', error);
    throw error;
  }
};
export const updateGame = async (id, updatedData) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedData);
  return res.data;
};

export const deleteGame = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
