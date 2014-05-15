//push new version
db.candidates.update({candidate:"gradle"}, {"$push": {versions: {version: "1.11-rc-1", url: "http://services.gradle.org/distributions/gradle-1.11-rc-1-all.zip"}}});
