const express = require('express');
const router = express.Router();



const PORT = process.env.PORT || 4000;
const app = express();

// middleware
const morgan = require('morgan');
app.use(express.static('public'));

app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
    res.render('index');
    }
);

app.get('/hello', function(request, response){
    response.send("Hello Friends!");
});


app.use("/api", routes);

//This is to catch anything that's trying to hit an api route that isn't made
app.all("/api/*", function (req, res, next) {
    res.send("THIS IS NOT AN API ROUTE");
});


// API
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/teams/teamId/%7Bteamid%7D',
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

// app listener
app.listen(4000, function() {
    console.log(`You are looking LIVE at PORT:${PORT}!`);
});

