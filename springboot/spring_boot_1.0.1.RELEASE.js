//push new version
db.candidates.update({candidate:"springboot"}, {"$push": {versions: {version: "1.0.1.RELEASE", url: "http://repo.spring.io/simple/release/org/springframework/boot/spring-boot-cli/1.0.1.RELEASE/spring-boot-cli-1.0.1.RELEASE-bin.zip"}}});

//update default
db.candidates.update({candidate:"springboot"}, {$set :{default:"1.0.1.RELEASE"}});
