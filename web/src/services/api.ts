import axios from 'axios';

const api = axios.create({
    baseURL: 'http://35.247.248.78:3333',
});

export default api;