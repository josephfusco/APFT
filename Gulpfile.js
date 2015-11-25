var gulp = require('gulp'),
	sass = require('gulp-sass'),
	notify = require("gulp-notify"),
	uglify = require('gulp-uglify'),
	rename = require("gulp-rename"),
	jsonminify = require('gulp-jsonminify'),
	watch = require('gulp-watch');

gulp.task('styles', function () {
	gulp.src('styles/**/*.scss')
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

gulp.task('data', function () {
    return gulp.src(['data/*.json'])
        .pipe(jsonminify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('styles/**/*.scss', ['styles']);
	gulp.watch('js/*.js', ['js']);
	gulp.watch('data/*.json', ['data']);
});

gulp.task('default', ['styles', 'js', 'json', 'watch']);