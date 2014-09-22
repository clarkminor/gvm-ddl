//push new version
db.candidates.update({candidate:"jbake"}, {"$push": {versions: {version: "2.3.2", url: "http://hash.to/HM"}}});

//update default
db.candidates.update({candidate:"jbake"}, {$set :{default:"2.3.2"}});

