//push new version
db.candidates.update({candidate:"springboot"}, {"$push": {versions: {version: "1.0.0.RC5", url: "http://repo.spring.io/milestone/org/springframework/boot/spring-boot-cli/1.0.0.RC5/spring-boot-cli-1.0.0.RC5-bin.zip"}}});

//pull an entry from an array
db.candidates.update({candidate:"springboot"}, {$pull: {versions: {version: "1.0.0.RC4"}}});

//update default
db.candidates.update({candidate:"springboot"}, {$set :{default:"1.0.0.RC5"}});
