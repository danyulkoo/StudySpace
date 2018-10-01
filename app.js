// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;

// Locations Database [MongoDB]
var db = mongojs('studyspace', ['locations']);

// routes
var routes = require('./routes/index');
var location = require('./routes/location');

var app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// Express Validator Middleware
app.use(expressValidator()); 

app.use('/', routes);
app.use('/location', location);

app.get('/location-data', function(req, res) {
    db.locations.find().sort({name:1}, function (err, docs) {
        res.send(docs);
    });
});

app.listen(3000, function() {
    console.log('Server started on Port 3000');
});
