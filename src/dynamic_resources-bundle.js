/* jshint node: true */
gulp_place("all", "clean");//gulp.remove.line
gulp_place('{ "glob": "main/*.js", "name": "${app.name}", "type": "module" }', 'combine');