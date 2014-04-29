//push new version
db.candidates.update({candidate:"play"}, {"$push": {versions: {version: "2.2.2", url: "http://downloads.typesafe.com/play/2.2.2/play-2.2.2.zip"}}});

//update default
db.candidates.update({candidate:"play"}, {$set :{default:"2.2.2"}});
