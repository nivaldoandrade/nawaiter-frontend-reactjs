import axios from 'axios';

import { localStoragesKeys } from '../config/localStorageKeys';
import delay from '../utils/delay';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

api.interceptors.response.use(
  async (response) => {
    if (process.env.NODE_ENV === 'development') {
      await delay(500);
    }

    return response;
  },
  async (error) => {
    if (process.env.NODE_ENV === 'development') {
      await delay(500);
    }

    if (
      error.response &&
      error.response.status === 401 &&
      (error.response.data.message === 'Invalid JWT Token' ||
        error.response.data.message === 'JWT token is missing')
    ) {
      localStorage.removeItem(localStoragesKeys.ACCESS_TOKEN);

      const win: Window = window;

      win.location = '/login';
    }

    return Promise.reject(error);
  },
);

export default api;
