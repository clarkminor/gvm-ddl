//push new version
db.candidates.update({candidate:"groovy"}, {"$push": {versions: {version: "2.3.0-rc-4", url: "http://dl.bintray.com/groovy/maven/groovy-binary-2.3.0-rc-4.zip"}}});

//pull old version
db.candidates.update({candidate:"groovy"}, {$pull: {versions: {version: "2.3.0-rc-2"}}});
