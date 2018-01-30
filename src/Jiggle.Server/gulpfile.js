/// <binding AfterBuild='default' Clean='clean' />

var gulp = require("gulp");
var del = require('del');
var rimraf = require("rimraf");
var concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify");

var paths = {
  webroot: "./wwwroot/"
};

paths.scripts = "scripts/";
paths.js = paths.webroot + "js/**/*.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task('clean:js', function () {
    return del(['wwwroot/js/**/*']);
});

gulp.task("clean:css", function (cb) {
  rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:css", function () {
  return gulp.src([paths.css, "!" + paths.minCss])
    .pipe(concat(paths.concatCssDest))
    .pipe(cssmin())
    .pipe(gulp.dest("."));
});

gulp.task("min", ["min:css"]);

var scriptpaths = {
    scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map']
};

gulp.task('build', function () {
    gulp.src(scriptpaths.scripts).pipe(gulp.dest('wwwroot/js'));
});

gulp.task("default", ["clean", "build", "min:css"]);