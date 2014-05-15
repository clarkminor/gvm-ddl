//push new version
db.candidates.update({candidate:"groovy"}, {"$push": {versions: {version: "2.2.2", url: "http://dl.bintray.com/groovy/maven/groovy-binary-2.2.2.zip"}}});

//update default
db.candidates.update({candidate:"groovy"}, {$set :{default:"2.2.2"}});
