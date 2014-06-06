//push new version
db.candidates.update({candidate:"gradle"}, {"$push": {versions: {version: "2.0-rc-1", url: "http://services.gradle.org/distributions/gradle-2.0-rc-1-all.zip"}}});
