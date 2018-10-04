var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;

// Locations Database [MongoDB]
var db = mongojs('studyspace', ['locations']);

// Express Validator Middleware
router.use(expressValidator()); 

// Root page
router.get('/', function(req, res) {
    db.locations.find().sort({name:1}, function (err, docs) {
        // Choose five random numbers (corresponding to a location) for the home display
        var arr = []
        while(arr.length < 5){
            var randomnumber = Math.floor(Math.random()*docs.length);
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }
        res.render('index', {
            locations: docs,
            randNums: arr
        });
    });

});

module.exports = router;