gulp_place("all", "clean");//gulp.remove.line
/**
 * @namespace dynamic_resources
 */
gulp_place('{ "glob": "main/*.js", "name": "${app.name}" }', 'combine');