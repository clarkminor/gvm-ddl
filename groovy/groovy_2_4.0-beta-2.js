//push new version
db.candidates.update({candidate:"groovy"}, {"$push": {versions: {version: "2.4.0-beta-2", url: "http://dl.bintray.com/groovy/maven/groovy-binary-2.4.0-beta-2.zip"}}});

//pull old version
db.candidates.update({candidate:"groovy"}, {$pull: {versions: {version: "2.4.0-beta-2"}}});
