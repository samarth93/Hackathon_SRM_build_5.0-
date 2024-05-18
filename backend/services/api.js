import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002',
});

export const registerUser = (userData) => api.post('/users/register', userData);
export const loginUser = (userData) => api.post('/users/login', userData);

export default api;
