var express = require('express');
var dbHandler = require('../model/dbHandler');
var router = express.Router();

var mongoose = require('mongoose');
var wiki = mongoose.model('wiki');

/* GET A User From The DataBase */
router.get('/wiki', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of wikis here, make sure you have started the database and set up some test wikis (see model-->db.js for instructions)");
    return;
  }

  //var wikis = dbHandler.getWiki("Abu Dhabi");
  ////res.end(function dbHandler.getWiki("asd"))
  //
  //console.log(wikis);
  //

  //console.log(dbHandler.getWiki("Abu Dhabi"));

  dbHandler.getWiki("Abu Dhabi", function(wikis) {
    console.log(wikis);
    res.header("Content-type","application/json");
    res.end(JSON.stringify(wikis));
  })

  //var wikis = dbHandler.getWiki("Abu Dhabi").done(
  //    res.end("Wikis: " + wikis[0]));


  //wiki.find({title: "Abu Dhabi"}, function (err, wikis) {
  //  if (err) {
  //    res.status(err.status || 400);
  //    res.end(JSON.stringify({error: err.toString()}));
  //    return;
  //  }
  //  res.header("Content-type","application/json");
  //  res.end(JSON.stringify(wikis));
  //});
});

module.exports = router;
