const { fetchBreedDescription } = require('./breedFetcher');

let breedRequest = process.argv.slice(2);
breedRequest = breedRequest.join("_");

fetchBreedDescription(breedRequest, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});
