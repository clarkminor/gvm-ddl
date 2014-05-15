//push new version
db.candidates.update({candidate:"groovy"}, {"$push": {versions: {version: "2.3.0-rc-1", url: "http://dl.bintray.com/groovy/maven/groovy-binary-2.3.0-rc-1.zip"}}});

//pull old version
db.candidates.update({candidate:"groovy"}, {$pull: {versions: {version: "2.3.0-beta-2"}}});
