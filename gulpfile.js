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
		.pipe(replace('href="/', 'href="./'))
		.pipe(replace(/href=".\/([A-Za-z\d-_]*)\/"/g, 'href="./$1.html/"'))
		.pipe(replace(/<title>/, /<title>UVic FSAE/))
		.pipe(replace("aboutcomp", "comp"))
		.pipe(replace("aboutteam", "team"))
		.pipe(replace("aboutcar", "car"))
        .pipe(gulp.dest('build'));
});

/**
 * Default task:
 * Copy public dir to build dir
 * Compile jade into build dir
 */
gulp.task('default', ['copy-public', 'compile-jade']);
