import axios from 'axios';

export const apiUrl = `http://localhost:3050`;

export const Api = axios.create({
  baseURL: apiUrl,
});