var gulp = require('gulp');
var concat = require('gulp-concat');
var	jsonminify = require('gulp-jsonminify');
var	rename = require("gulp-rename");
var	sass = require('gulp-sass');
var	uglify = require('gulp-uglify');
var	watch = require('gulp-watch');

var paths = {
    styles: './assets/styles/',
    js: './assets/js/',
    json: './data/'
};

gulp.task('styles', function () {
	gulp.src(paths.styles + '**/*.scss')
        .pipe(sass({
            includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets'],
            outputStyle: 'compressed'
        }))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.styles + 'build'));
});

gulp.task('scripts', function() {
  return gulp.src([
      paths.js + 'navbar.js',
      paths.js + 'app.js'
    ])
    .pipe(concat({ path: 'app.min.js', stat: { mode: 0666 }}))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js + 'build'));
});

gulp.task('data', function () {
    return gulp.src([paths.json + '*.json'])
        .pipe(jsonminify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.json + '/build'));
});

gulp.task('watch', function() {
	gulp.watch(paths.styles + '**/*.scss', ['styles']);
	gulp.watch(paths.js + '*.js', ['scripts']);
    gulp.watch(paths.json + '*.json', ['data']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);
