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
        console.log(docs);
        res.render('index', {
            locations: docs
        });
    });

});

module.exports = router;