var gulp = require('gulp');
var jade = require('gulp-jade');

/**
 * Compile jade files into /public directory
 */
gulp.task('jade', function() {
    return gulp.src(["views/*.jade", "!views/error.jade"])
        .pipe(jade())
        .pipe(gulp.dest('public'));
});

/**
 * Default task, running just `gulp` will compile the jade files into /public
 */
gulp.task('default', ['jade']);
