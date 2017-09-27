var models = require('../../../models').getModels();
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

let getPosts = async () => {
  try {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to Postgres
    let res =  await axios.get(`${API}/posts`)
    return res;
  } catch(e) {
    e => console.log(e.stack)
  };
}

module.exports = {
  getPosts: getPosts
};