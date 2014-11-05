var gulp = require('gulp');
var changed = require('gulp-changed');
var gconcat = require('gulp-concat');
var stylus = require('gulp-stylus');
var nib = require('nib');
var streamFiles = require('stream-files');
var config = require('../config').stylus;

gulp.task('stylus', function() {
  return gulp.src(config.src)
    .pipe(stylus({ use: nib() }))
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