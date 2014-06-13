//push new version
db.candidates.update({candidate:"crash"}, {"$push": {versions: {version: "1.3.0", url: "http://dl.bintray.com/crashub/crash/crash-1.3.0.zip"}}});
db.candidates.update({candidate:"crash"}, {$set :{default:"1.3.0"}});

//pull old version
db.candidates.update({candidate:"crash"}, {$pull: {versions: {version: "1.3.0.RC7"}}});
