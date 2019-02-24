const request = require('request');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// create app
const express = require('express');
const app = express();

// setup db connection
const mongoose = require('mongoose');
let mongoUri = 'mongodb://localhost/mdnb'
mongoose.connect(mongoUri, {useNewUrlParser: true});

// allow Cross Origin Requests for Angular application
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// import routes
let noteRoutes = require('./server/routes/note-routes');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// use routes
app.use(noteRoutes);

// start server
let port = process.env.PORT || 5000;
let server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
