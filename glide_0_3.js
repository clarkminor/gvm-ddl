db.candidates.insert({candidate:"glide", default:"0.3.1", versions:[{version: "0.3.1", url: "http://dl.bintray.com/kdabir/apps/glide/glide-0.3.1.zip"}]});
db.candidates.update({candidate:"glide"}, {"$push": {versions: {version: "0.3", url: "http://dl.bintray.com/kdabir/apps/glide/glide-0.3.zip"}}});
