var gulp = require('gulp'),
	sass = require('gulp-sass'),
	notify = require("gulp-notify"),
	uglify = require('gulp-uglify'),
	rename = require("gulp-rename"),
	watch = require('gulp-watch');

gulp.task('styles', function () {
	gulp.src('css/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'))
		.pipe(notify("APFT styles are ready."));
});

gulp.task('js', function() {
  	gulp.src('js/*.js')
	    .pipe(uglify())
	    .pipe(rename({suffix: '.min'}))
	    .pipe(gulp.dest('dist'))
	    .pipe(notify("APFT JavaScript is ready."));
});

gulp.task('watch', function() {
	gulp.watch('css/**/*.scss', ['styles']);
	gulp.watch('js/*.js', ['js']);
});

gulp.task('default', ['styles', 'js', 'watch']);