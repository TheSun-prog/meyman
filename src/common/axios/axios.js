import axios from 'axios';

const BASEURL = 'http://127.0.0.1:8000/api'

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 5000,
  headers: {
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Headers': "X-Requested-With",
    'Content-Type': 'application/json',

  }
});

export default instance;
