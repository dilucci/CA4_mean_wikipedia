global.TEST_DATABASE = "mongodb://localhost/TestDataBase_xx1243";

var should = require("should");
var app = require("../../server/app");
var http = require("http");
var testPort = 9999;
var testServer;
var mongoose = require("mongoose");
var wiki = mongoose.model("wiki");
var testDatabase = require('./wikiTestDatabase');
//var mock = require("angular-mocks");

describe('REST API for /wiki', function () {



  //Start the Server before the TESTS
  before(function (done) {

    testServer = app.listen(testPort, function () {
      console.log("Server is listening on: " + testPort);
    })
    .on('error',function(err){
        console.log(err);
      });

    testDatabase.populateDatabase(function() {
      done();
    });
  })

  after(function(){  //Stop server after the test
    //Uncomment the line below to completely remove the database, leaving the mongoose instance as before the tests
    //mongoose.connection.db.dropDatabase();
    testServer.close();
  })

  it("Should get 1 wiki with title Jeppe K", function (done) {
    http.get("http://localhost:"+testPort+"/api/wiki/Jeppe K",function(res){
      res.setEncoding("utf8");//response data is now a string
      res.on("data",function(chunk){
        var wikis = JSON.parse(chunk);
        wikis.length.should.equal(1);
        wikis[0].title.should.equal("Jeppe K");
        done();
      });
    })
  });

  it("Should get 1 wiki with category Games; League of Legends", function (done) {
    http.get("http://localhost:"+testPort+"/api/wikicategories/Games",function(res){
      res.setEncoding("utf8");//response data is now a string
      res.on("data",function(chunk){
        var wikis = JSON.parse(chunk);
        wikis.length.should.equal(1);
        wikis[0].title.should.equal("League of Legends");
        done();
      });
    })
  });

  it("Should get all distinct categories (3); Ejendomsmægler, Games, Moba", function (done) {
    http.get("http://localhost:"+testPort+"/api/wikicategories",function(res){
      res.setEncoding("utf8");//response data is now a string
      res.on("data",function(chunk){
        var categories = JSON.parse(chunk);
        categories.length.should.equal(3);
        categories[0].should.equal("Ejendomsmægler");
        categories[1].should.equal("Games");
        categories[2].should.equal("Moba");
        done();
      });
    })
  });

  it("Should get 2 wikis; Jeppe K, League of Legends", function (done) {
    http.get("http://localhost:"+testPort+"/api/wiki/e",function(res){
      res.setEncoding("utf8");//response data is now a string
      res.on("data",function(chunk){
        var wikis = JSON.parse(chunk);
        wikis.length.should.equal(2);
        wikis[0].title.should.equal("Jeppe K");
        wikis[1].title.should.equal("League of Legends");
        done();
      });
    })
  });
});
