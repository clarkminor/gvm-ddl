//push new version
db.candidates.update({candidate:"grails"}, {"$push": {versions: {version: "2.4.1", url: "http://dist.springframework.org.s3.amazonaws.com/release/GRAILS/grails-2.4.1.zip"}}});

//update default
db.candidates.update({candidate:"grails"}, {$set :{default:"2.4.1"}});
