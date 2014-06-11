//push new version
db.candidates.update({candidate:"springboot"}, {"$push": {versions: {version: "1.1.0.RELEASE", url: "http://repo.spring.io/simple/release/org/springframework/boot/spring-boot-cli/1.1.0.RELEASE/spring-boot-cli-1.1.0.RELEASE-bin.zip"}}});

//pull an entry from an array
db.candidates.update({candidate:"springboot"}, {$pull: {versions: {version: "1.1.0.RC1"}}});

//update default
db.candidates.update({candidate:"springboot"}, {$set :{default:"1.1.0.RELEASE"}});
