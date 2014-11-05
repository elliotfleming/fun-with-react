var gulp = require('gulp');
var changed = require('gulp-changed');
var streamFiles = require('stream-files');
var config = require('../config').assets;

gulp.task('assets', function() {
  return gulp.src(config.src)
    .pipe(
      changed(
        config.dest,
        { hasChanged: changed.compareSha1Digest }
      )
    )
    .pipe(streamFiles())
    .pipe(gulp.dest(config.dest));
});