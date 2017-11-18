var models = require('../../../models').getModels();
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

const getPosts = () => {
  return axios.get(`${API}/posts`);
}

module.exports = {
  getPosts: getPosts
};