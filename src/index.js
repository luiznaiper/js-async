//const axios = require('axios')

const API_URL = 'https://rickandmortyapi.com/api/character/'

let res = axios.get(API_URL)
  .then(function (response) {
    // handle success
    console.log(response);
    let data1 = response.data.results[0].name
    let data2 = response.data.info.count
    let data3 = response.data.results[0].origin.url
    console.log(data1)
    console.log(data2)
    console.log(data3)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log('finally')
  });

