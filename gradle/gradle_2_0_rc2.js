//pull an entry from an array
db.candidates.update({candidate:"gradle"}, {$pull: {versions: {version: "2.0-rc-1"}}});

//push new version
db.candidates.update({candidate:"gradle"}, {"$push": {versions: {version: "2.0-rc-2", url: "http://services.gradle.org/distributions/gradle-2.0-rc-2-all.zip"}}});
