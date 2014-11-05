var gulp = require('gulp');

gulp.task('build', ['browserify', 'assets', 'stylus', 'bower:styles', 'bower:scripts']);