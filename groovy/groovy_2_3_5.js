//push new version
db.candidates.update({candidate:"groovy"}, {"$push": {versions: {version: "2.3.5", url: "http://dl.bintray.com/groovy/maven/groovy-binary-2.3.5.zip"}}});

//update default
db.candidates.update({candidate:"groovy"}, {$set :{default:"2.3.5"}});
