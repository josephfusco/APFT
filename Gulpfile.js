const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const watch = require('gulp-watch')
const uglify = require('gulp-uglify')
const pump = require('pump')
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const rev = require('gulp-rev-append')

gulp.task('styles', () => {
	gulp.src('./assets/styles/src/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS({specialComments: 'none'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./assets/styles/dist/'))
});

gulp.task('js', (cb) => {
	pump([
		gulp.src('assets/js/src/**/*.js'),
		uglify(),
		rename({suffix: '.min'}),
		gulp.dest('assets/js/dist')
	],cb);
});

gulp.task('rev', () => {
	gulp.src('./index.html')
		.pipe(rev())
		.pipe(gulp.dest('.'));
});

gulp.task('watch', () => {
	gulp.watch('./assets/styles/src/**/*.scss', ['styles', 'rev'])
	gulp.watch('./assets/js/src/**/*.js', ['js', 'rev'])
});

gulp.task('default', ['styles', 'js', 'watch'])
