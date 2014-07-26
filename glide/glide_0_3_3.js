//push new version
db.candidates.update({candidate:"glide"}, {"$push": {versions: {version: "0.3.3", url: "http://dl.bintray.com/kdabir/apps/glide/glide-0.3.3.zip"}}});

//update default
db.candidates.update({candidate:"glide"}, {$set :{default:"0.3.3"}});
