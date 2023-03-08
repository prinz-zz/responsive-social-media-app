import axios from 'axios';

export const makeRequest = axios.create({
    baseURL: 'http://localhost:6600/api',
    withCredentials: true,
})