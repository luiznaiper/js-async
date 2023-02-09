// const axios = require('axios')

const API_URL = 'https://rickandmortyapi.com/api/character/'

axios.get(API_URL)
  .then(function (response) {
    // handle success
    console.log(response.data.info.count)
    return axios.get(`${API_URL}${response.data.results[0].id}`)
  }).then((response) => {
    console.log(response.data.name)
    return axios.get(response.data.origin.url)
  }) .then( (response)=> {
    console.log(response.data.dimension)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    //console.log('finally')
  });

