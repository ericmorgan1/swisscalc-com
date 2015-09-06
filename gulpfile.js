var gulp            = require("gulp");
var del             = require("del");
var jshint          = require("gulp-jshint");
var runSequence     = require("run-sequence");
var imagemin        = require("gulp-imagemin");
var concat          = require("gulp-concat");
var uglify          = require("gulp-uglify");
var autoprefixer    = require("gulp-autoprefixer");
var minifyCss       = require("gulp-minify-css");
var minifyHtml      = require("gulp-minify-html");
var gulpif			= require("gulp-if");
var useref			= require("gulp-useref");

// Clean/Delete output files...
gulp.task("clean", function() {
	del(["dist/*"]);
});

// Copy all additional files
gulp.task("copy", function() {
    return gulp.src(["src/**/*"])
        .pipe(gulp.dest("dist"));
});

// "Lint" all js files...
gulp.task("jshint", function() {
    return gulp.src(["src/js/**/*.js", "!src/js/ext/**"])
        .pipe(jshint())
        .pipe(jshint.reporter("default")); 
});

// Minimize all image files (in src/img)...
gulp.task("images", function() {
    return gulp.src("src/img/**/*")
        .pipe(imagemin({ 
            optimizationLevel: 5,
            progressive: true,
            interlaced: true}))
        .pipe(gulp.dest("dist/img"));
});

// Optimize and copy all js files (in src/js)...
gulp.task("scripts", function() {
    return gulp.src("src/js/**/*.js")
		.pipe(uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
        .pipe(gulp.dest("dist/js"));
});

// Optimize, autoprefix, and copy all css files (in src/css)...
gulp.task("styles", function() {
    return gulp.src("src/css/**/*.css")
        //.pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(gulp.dest("dist/css"));
});

// Concatenate/autoprefix/minify all css/js file blocks; Optimize and copy all html files...
gulp.task("build-blocks", function() {
	var assets = useref.assets();
    return gulp.src("src/**/*.html")
		.pipe(assets)
		.pipe(gulpif("*.js", uglify()))
		.pipe(gulpif("*.css", minifyCss()))
		.pipe(assets.restore())
		.pipe(useref())
        .pipe(gulp.dest("dist"));
        
        //.pipe(gulpif("*.css", autoprefixer())) // right before minifyCss
});

// Minifies the HTML. Does this straight from the "dist/" folder because useref was not doing anything with HTML.
gulp.task("html", function() {
	return gulp.src("dist/**/*.html")
        .pipe(minifyHtml({empty: true, conditionals: true}))
        .pipe(gulp.dest("dist"));
});

// Build task
gulp.task("build", function(cb) {
	// clean:   		Deletes the dist/ folder
	// copy:    		Copies everything from src/ to dist/
	// images:  		Optimizes images from src/ and overwrites them in dist/
	// scripts: 		Optimizes scripts (*.js files) from src/ and overwrites them in dist/
	// styles:  		Optimizes styles (*.css files) from src/ and overwrites them in dist/
	// build-blocks:	Parses the HTML build blocks and combines css/js files into one file. Also optimizes those files.
	// html:			Optimizes *.html files directly in the dist folder
	
    runSequence("clean", "copy", /*"jshint",*/ "images", "scripts", "styles", "build-blocks", "html");
});

// Default Task...
gulp.task("default", ["build"]);