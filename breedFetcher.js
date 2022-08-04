const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(
    `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`,
    (error, response, body) => {
      let status = response;
      
      if (error) {
        callback(error, null);
        return status;
      }
      
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(null, `No such breed in TheCatApi! Please search for a different breed. A list of available breeds can be found at https://docs.thecatapi.com/example-by-breed.`);
      } else {
        callback(null, data[0].description);
      }
    }
  );
};

module.exports = {
  fetchBreedDescription
};