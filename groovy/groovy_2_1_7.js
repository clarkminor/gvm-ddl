//push new version
db.candidates.update({candidate:"groovy"}, {"$push": {versions: {version: "2.1.7", url: "http://dl.bintray.com/groovy/maven/groovy-binary-2.1.7.zip"}}});
