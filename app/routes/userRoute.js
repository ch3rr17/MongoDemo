//Dependecies
var express = require('express');
var User = require('../models/userModel.js');


//Opens App Routes
module.exports = function(app) {

    //GET Route
    //Gets a list of breweries with a limit of x amount breweries per page (limit is set in the front end app)
    app.get('/users', function(req, res) {
        
                //Uses Mongoose schema to run search
                var query = User.find({});
                query.exec(function(err, users) {
                    if (err) {
                        res.send(err);
                    }
                    //If no errors are found, it responds with a JSON of all revenues
                    else {
                        res.json(users);
                        console.log(users);
                    }
                });
            });

    };
