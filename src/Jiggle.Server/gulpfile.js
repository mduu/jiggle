/// <binding AfterBuild='default' /

var gulp = require("gulp");
var rimraf = require("rimraf");
var concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var del = require('del');

var paths = {
  webroot: "./wwwroot/"
};

paths.scripts = "scripts/";
paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/bundle.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.tsFiles = [
    paths.scripts + "main.ts",
    paths.scripts + "greet.ts",
];

gulp.task("clean:js", function (cb) {
  rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
  rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
  return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
    .pipe(concat(paths.concatJsDest))
    .pipe(uglify())
    .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
  return gulp.src([paths.css, "!" + paths.minCss])
    .pipe(concat(paths.concatCssDest))
    .pipe(cssmin())
    .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("build", function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: paths.tsFiles,
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("wwwroot/js"));
});

gulp.task("default", ["clean", "build", "min:css"]);