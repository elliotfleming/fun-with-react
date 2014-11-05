var gulp = require('gulp');
var del = require('del');
var config = require('../config').build;

gulp.task('clean', function(next) {
  del([config.dest], next());
});