//push new version
db.candidates.update({candidate:"grails"}, {"$push": {versions: {version: "2.2.5", url: "http://dist.springframework.org.s3.amazonaws.com/release/GRAILS/grails-2.2.5.zip"}}});
