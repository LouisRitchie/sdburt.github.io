var gulp = require('gulp');
var jade = require('gulp-jade');
var replace = require('gulp-replace');

gulp.task('copy-public', function() {
    return gulp.src("public/**")
        .pipe(gulp.dest('build'));
});

gulp.task('compile-jade', function() {
    return gulp.src(["views/*.jade", "!views/error.jade"])
        .pipe(jade())
		.pipe(replace('src="/', 'src="./'))
        .pipe(gulp.dest('build'));
});

/**
 * Default task:
 * Copy public dir to build dir
 * Compile jade into build dir
 */
gulp.task('default', ['copy-public', 'compile-jade']);
