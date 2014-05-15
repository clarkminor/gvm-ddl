//push new version
db.candidates.update({candidate:"grails"}, {"$push": {versions: {version: "2.4.0.M2", url: "http://dist.springframework.org.s3.amazonaws.com/milestone/GRAILS/grails-2.4.0.M2.zip"}}});

//pull version
db.candidates.update({candidate:"grails"}, {$pull: {versions: {version: "2.4.0.M1"}}});
