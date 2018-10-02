var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;

// Locations Database [MongoDB]
var db = mongojs('studyspace', ['locations']);

// Express Validator Middleware
router.use(expressValidator());

// GET location page
router.get('/', function(req,res) {
    var id = req.query.id;
    db.locations.find().sort({name:1}, function (err, docs) {
        if (id != undefined && id != null) {
            docs.forEach(place => {
                if (place._id == id) {
                    res.render('location', {
                        locations: docs,
                        name: place.name,
                        hours: place.hours,
                        distance: place.distance,
                        description: place.description
                    });
                }
            });
        }
        else {
            res.send('Location does not exist.');
        }
    });
});

module.exports = router;