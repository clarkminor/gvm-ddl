//push new version
db.candidates.update({candidate:"vertx"}, {"$push": {versions: {version: "2.1RC3", url: "http://dl.bintray.com/vertx/downloads/vert.x-2.1RC3.zip"}}});

//pull an entry from an array
db.candidates.update({candidate:"vertx"}, {$pull: {versions: {version: "2.1M2"}}});
