//push new version
db.candidates.update({candidate:"griffon"}, {$push: {versions: {version: "1.5.0", url: "http://dl.bintray.com/aalmiray/Griffon/griffon-1.5.0-bin.zip"}}});

//update default
db.candidates.update({candidate:"griffon"}, {$set :{default:"1.5.0"}});
