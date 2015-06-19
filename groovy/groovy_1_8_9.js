//push new version
db.candidates.update({candidate:"groovy"}, {"$push": {versions: {version: "1.8.9", url: "http://dl.bintray.com/groovy/maven/groovy-binary-1.8.9.zip"}}});
