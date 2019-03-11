import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
});

export const withoutBase = axios.create();

export default api;
