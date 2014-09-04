//push new version
db.candidates.update({candidate:"gradle"}, {"$push": {versions: {version: "2.1-rc-2", url: "http://services.gradle.org/distributions/gradle-2.1-rc-2-all.zip"}}});
