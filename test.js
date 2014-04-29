//push new version
db.candidates.update({candidate:"grails"}, {"$push": {versions: {version: "0.0.0", url: "https://dl.dropboxusercontent.com/u/5383535/grails-0.0.0.zip"}}});
