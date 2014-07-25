//push new version
db.candidates.update({candidate:"vertx"}, {"$push": {versions: {version: "2.1.2", url: "http://dl.bintray.com/vertx/downloads/vert.x-2.1.2.zip"}}});

//update default
db.candidates.update({candidate:"vertx"}, {$set :{default:"2.1.2"}});
