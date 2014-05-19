//push new version
db.candidates.update({candidate:"grails"}, {"$push": {versions: {version: "2.4.0.RC2", url: "http://dist.springframework.org.s3.amazonaws.com/milestone/GRAILS/grails-2.4.0.RC2.zip"}}});

//pull version
db.candidates.update({candidate:"grails"}, {$pull: {versions: {version: "2.4.0.RC1"}}});
