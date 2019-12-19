import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-rambo.herokuapp.com'
});

export default api;