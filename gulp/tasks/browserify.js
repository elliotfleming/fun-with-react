var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var bundleLogger = require('../lib/bundleLogger');
var handleErrors = require('../lib/bundleErrors');
var config = require('../config').browserify;

gulp.task('browserify', function (next) {

  var bundleQueue = config.bundleConfigs.length;

  var createBundle = function (bundleConfig) {

    var bundler = browserify({
      cache: {},
      packageCache: {},
      fullPaths: true,
      entries: bundleConfig.entries,
      extensions: config.extensions,
      debug: config.debug
    });

    var bundle = function() {

      bundleLogger.start(bundleConfig.name);

      return bundler
        .bundle()
        .on('error', handleErrors)
        .pipe(source(bundleConfig.name))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    if (global.isWatching) {
      bundler = watchify(bundler);
      bundler.on('update', bundle);
    }

    var reportFinished = function() {

      bundleLogger.end(bundleConfig.name)

      if (bundleQueue) {
        bundleQueue--;
        if (bundleQueue === 0) next();
      }
    };

    return bundle();
  };

  config.bundleConfigs.forEach(createBundle);
});