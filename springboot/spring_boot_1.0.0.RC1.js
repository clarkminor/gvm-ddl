//push new version
db.candidates.update({candidate:"springboot"}, {"$push": {versions: {version: "1.0.0.RC1", url: "http://repo.spring.io/milestone/org/springframework/boot/spring-boot-cli/1.0.0.RC1/spring-boot-cli-1.0.0.RC1-bin.zip"}}});

//update default
db.candidates.update({candidate:"springboot"}, {$set :{default:"1.0.0.RC1"}});
