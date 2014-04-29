//drop old tables
db.candiates.drop();
db.audit.drop();
db.versions.drop();

//create candidates
db.candidates.insert({candidate:"groovy", default:"2.0.5"});
db.candidates.insert({candidate:"grails", default:"2.1.0"});

//push new versions
db.candidates.update({candidate:"groovy"}, {"$push": {versions: {version: "2.0.5", url: "http://localhost/groovy-2.0.5.zip"}}});
db.candidates.update({candidate:"grails"}, {"$push": {versions: {version: "1.3.6", url: "http://localhost/grails-1.3.6.zip"}}});
db.candidates.update({candidate:"grails"}, {"$push": {versions: {version: "1.3.9", url: "http://localhost/grails-1.3.9.zip"}}});
db.candidates.update({candidate:"grails"}, {"$push": {versions: {version: "2.1.0", url: "http://localhost/grails-2.1.0.zip"}}});

