//push new version
db.candidates.update({candidate:"gradle"}, {"$push": {versions: {version: "1.12", url: "http://services.gradle.org/distributions/gradle-1.12-all.zip"}}});

//pull an entry from an array
db.candidates.update({candidate:"gradle"}, {$pull: {versions: {version: "1.12-rc-2"}}});


//update default
db.candidates.update({candidate:"gradle"}, {$set :{default:"1.12"}});
