import axios from 'axios';

const api = axios.create({
    baseURL: 'http://18.223.56.134/api/'
});

export default api;