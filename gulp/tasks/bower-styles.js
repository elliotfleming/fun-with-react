var gulp = require('gulp');
var changed = require('gulp-changed');
var gconcat = require('gulp-concat');
var filter = require('gulp-filter');
var bowerFiles = require('main-bower-files');
var streamFiles = require('stream-files');
var config = require('../config').bower.styles;

gulp.task('bower:styles', function() {
  return gulp.src(bowerFiles())
    .pipe(filter('**/*.css'))
    .pipe(gconcat(config.name))
    .pipe(
      changed(
        config.dest,
        { hasChanged: changed.compareSha1Digest }
      )
    )
    .pipe(streamFiles())
    .pipe(gulp.dest(config.dest));
});