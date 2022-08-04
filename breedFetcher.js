const request = require('request');

let breedRequest = process.argv.slice(2);
breedRequest = breedRequest.join("_");

request(
  `https://api.thecatapi.com/v1/breeds/search?name=${breedRequest}`,
  (error, response, body) => {
    let status = response;
    
    if (error) {
      console.log(error);
      return status;
    }
    
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log(`No such breed in TheCatApi! Please search for a different breed. A list of available breeds can be found at https://docs.thecatapi.com/example-by-breed.`);
    } else {
      console.log(data[0].description);
    }

  }
);