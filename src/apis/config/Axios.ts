import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dev-api.popi.today',
  withCredentials: true,
});
