var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();

function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
};




function watch(){
    browserSync.init({
        server:{
            open: "external",
            proxy: "http://localhost/micro-team",
            browser:"google chrome"
        }
 });

 gulp.watch('./sass/**/*.scss', buildStyles);
}

exports.buildStyles = buildStyles;
exports.watch = watch;