//push new version
db.candidates.update({candidate:"gradle"}, {"$push": {versions: {version: "1.9", url: "http://services.gradle.org/distributions/gradle-1.9-all.zip"}}});

//pull an entry from an array
db.candidates.update({candidate:"gradle"}, {$pull: {versions: {version: "1.9-rc-4"}}});


//update default
db.candidates.update({candidate:"gradle"}, {$set :{default:"1.9"}});
