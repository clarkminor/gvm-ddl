//push new version
db.candidates.update({candidate:"lazybones"}, {"$push": {versions: {version: "0.5", url: "http://dl.bintray.com/pledbrook/lazybones-templates/lazybones-0.5.zip"}}});

//update default
db.candidates.update({candidate:"lazybones"}, {$set :{default:"0.5"}});
