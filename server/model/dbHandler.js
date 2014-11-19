var express = require('express');
var mongoose = require('mongoose');
var wiki = mongoose.model('wiki');

module.exports.getWiki = function(title, callback) {
    console.log("hej i getWiki");
    wiki.find({title: title}, function (error, wikis) {
        callback(wikis);
    });
};

module.exports.findWiki = function(searchString, callback) {
    console.log('hej i findWiki');
    wiki.find({title: {$regex: new RegExp(searchString, "i")} }, function (error, wikis) {
        console.log(wikis);
        callback(wikis);
    });
};

module.exports.getCategories = function() {
    model.WikiModel.find(function (error, wikis) {
        return wikis;
    });
};

module.exports.getWikisWithCategory = function(category) {
    model.WikiModel.find(function (error, wikis) {
        return wikis;
    });
};