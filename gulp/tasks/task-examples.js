/* jshint esversion: 6,-W097, -W040, node: true, expr: true */
module.exports= function({gulp, scripts, $g, $o, app, cordova_target_device, error}){
    const /* files source and destination */
        lib_file= app.name+"-namespace.js",
        [ target_folder, files_pattern, files_not_pattern ]= [ app.directories.doc, "*.html", "*.sub.html" ],
        folder= "src_"+target_folder;
    let links_paragraphs_buffer= [];
    /* jshint -W061 */const gulp_place= $g.place({ variable_eval: (str)=> eval(str), filesCleaner: require("../gulp_cleanJSHINT.js") });/* jshint +W061 */
    return function(cb){
        if(error.getNum()) return cb();
        gulp.src([ `${folder}${files_pattern}`, `!${folder}${files_not_pattern}` ])
        .pipe(gulp_place({ folder, string_wrapper: '' }))
        .pipe($g.replace(/<!-- gulp – task-examples: [^-]* -->/g, addSourceLink))
        .pipe(gulp.dest(target_folder))
        .on('end', ()=>{
            gulp.src([ app.directories.bin+lib_file ])
            .pipe(gulp.dest(target_folder))
            .on('end', cb);
        });
    };
    function addSourceLink(match, chars, file_text){
        if(match==="<!-- gulp – task-examples: insert file link -->"){
            return links_paragraphs_buffer.shift();
        }
        const line= String((t=> t&&t.length+3||1)(file_text.substring(0, chars).match(/\r?\n/g)));
        const link= app.homepage.replace("#readme", "/blob/master/")+target_folder+"examples.html#L"+line;
        links_paragraphs_buffer.push(`<p class="notes"><a href="${link}" target="_blank">View with highliting (link to source of this file)</a></p>`);
        return "";
    }
};
