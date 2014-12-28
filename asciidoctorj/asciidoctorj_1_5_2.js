//push new version
db.candidates.update({candidate:"asciidoctorj"}, {"$push": {versions: {version: "1.5.2", url: "https://bintray.com/artifact/download/asciidoctor/maven/org/asciidoctor/asciidoctorj/1.5.2/asciidoctorj-1.5.2-bin.zip"}}});

//update default
db.candidates.update({candidate:"asciidoctorj"}, {$set :{default:"1.5.2"}});
