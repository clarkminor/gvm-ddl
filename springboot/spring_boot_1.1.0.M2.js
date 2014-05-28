//push new version
db.candidates.update({candidate:"springboot"}, {"$push": {versions: {version: "1.1.0.M2", url: "http://repo.spring.io/milestone/org/springframework/boot/spring-boot-cli/1.1.0.M2/spring-boot-cli-1.1.0.M2-bin.zip"}}});

//pull old version
db.candidates.update({candidate:"springboot"}, {$pull: {versions: {version: "1.1.0.M1"}}});
