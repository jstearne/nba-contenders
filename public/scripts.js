import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/seasons/',
  headers: {
    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
    'x-rapidapi-key': '996a75504dmsh27d601a97da1825p164667jsn4f11b461ba50'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});