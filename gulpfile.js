var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	del = require('del'),
	jshint = require('gulp-jshint');

gulp.task('clean', function (callback) {
    return del(['./build/*'], callback);
});
gulp.task('build', function () {
    return gulp.src('./src/*.js')
        .pipe(plumber())
        .pipe(jshint())
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./build'));
});
gulp.task('default', ['clean','build']);