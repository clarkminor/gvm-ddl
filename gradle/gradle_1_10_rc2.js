//push new version
db.candidates.update({candidate:"gradle"}, {"$push": {versions: {version: "1.10-rc-2", url: "http://services.gradle.org/distributions/gradle-1.10-rc-2-all.zip"}}});

//pull an entry from an array
db.candidates.update({candidate:"gradle"}, {$pull: {versions: {version: "1.10-rc-1"}}});
