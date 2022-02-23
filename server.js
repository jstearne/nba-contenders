const express = require('express');

const PORT = process.env.PORT || 4000;
const app = express();
const favicon = require('serve-favicon');
const path = require('path');

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

// routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/hello', function(request, response){
    response.send("Hello Friends!");
});

// app listener
app.listen(4000, function() {
    console.log(`You are looking LIVE at PORT:${PORT}!`);
});
