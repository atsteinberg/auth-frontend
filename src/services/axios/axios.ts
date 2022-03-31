import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const privateAxios = axios.create({
  baseURL,
  headers,
});

export const publicAxios = axios.create({
  baseURL,
  headers,
});

export const { isAxiosError } = axios;
