//pull an entry from an array
db.candidates.update({candidate:"gradle"}, {$pull: {versions: {version: "2.1-rc-1"}}});
db.candidates.update({candidate:"gradle"}, {$pull: {versions: {version: "2.1-rc-2"}}});

//push new version
db.candidates.update({candidate:"gradle"}, {"$push": {versions: {version: "2.1-rc-4", url: "http://services.gradle.org/distributions/gradle-2.1-rc-4-all.zip"}}});
