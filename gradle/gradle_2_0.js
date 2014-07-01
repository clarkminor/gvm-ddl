//pull an entry from an array
db.candidates.update({candidate:"gradle"}, {$pull: {versions: {version: "2.0-rc-2"}}});

//push new version
db.candidates.update({candidate:"gradle"}, {"$push": {versions: {version: "2.0", url: "https://services.gradle.org/distributions/gradle-2.0-all.zip"}}});

//update default
db.candidates.update({candidate:"gradle"}, {$set :{default:"2.0"}});
