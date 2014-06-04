//push new version
db.candidates.update({candidate:"springboot"}, {"$push": {versions: {version: "1.1.0.RC1", url: "http://repo.spring.io/milestone/org/springframework/boot/spring-boot-cli/1.1.0.RC1/spring-boot-cli-1.1.0.RC1-bin.zip"}}});

//pull an entry from an array
db.candidates.update({candidate:"springboot"}, {$pull: {versions: {version: "1.1.0.M1"}}});

