//push new version
db.candidates.update({candidate:"groovy"}, {"$push": {versions: {version: "2.2.1", url: "http://dist.groovy.codehaus.org/distributions/groovy-binary-2.2.1.zip"}}});

//update default
db.candidates.update({candidate:"groovy"}, {$set :{default:"2.2.1"}});
