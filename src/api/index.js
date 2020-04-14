import axios from 'axios';

const markerApi = axios.create({
  baseURL: 'http://localhost:3000/dev/markers/',
});

export default markerApi;
