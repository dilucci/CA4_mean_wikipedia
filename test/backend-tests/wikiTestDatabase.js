var mongoose = require("mongoose");
var wiki = mongoose.model("wiki");



function populateDatabase(done) {
    wiki.remove({}, function () {

        wiki.create(wikisArray, function (err) {
            done();
        });
    });
}

var wikisArray = [{
    "title": "League of Legends",
    "url": "http://leagueoflegends.com",
    "abstract": "Andreas er dårlig til LoL",
    "categories": [
        "Games",
        "Moba"
    ],
    "headings": [
        {
            "heading": "Game objective",
            "position": "4"
        },
        {
            "heading": "Summoners",
            "position": "9"
        },
        {
            "heading": "Seasons",
            "position": "7"
        }
    ],
    "links": [
        "http://lolking.com",
        "http://eloboost.com"
    ]
},
    {
        "title": "Jeppe K",
        "url": "https://www.youtube.com/watch?v=6sTlA9YNlis",
        "abstract": "Danmarks bedste ejendomsmægler",
        "categories": [
            "Ejendomsmægler"
        ],
        "headings": [
            {
                "heading": "Early life",
                "position": "1"
            },
            {
                "heading": "Controversy",
                "position": "2"
            }
        ],
        "links": [
            "http://kvælertagogspytimunden",
            "http://nytnytnyt.dk"
        ]
    }
];

module.exports.populateDatabase = populateDatabase;
module.exports.wikisArray = wikisArray;
