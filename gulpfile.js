var gulp = require("gulp");

var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("lint", function() {
	return gulp.src(['client/views/*.js','client/models/*.js','client/collections/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter("default"));
});

gulp.task("sass", function() {
	return gulp.src('client/style/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('client/css'));
});

gulp.task("scripts", function() {
	return gulp.src(["client/views/*.js", "client/collections/*.js", "client/models/*.js"])
		.pipe(concat("all.js"))
		.pipe(gulp.dest("client/dist"))
		.pipe(rename("all.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("client/dist"));
});

gulp.task('default', ['lint', 'sass', 'scripts']);