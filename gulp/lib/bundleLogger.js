var gutil = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {

  start: function (path) {
    startTime = process.hrtime();
    gutil.log('Bundling', gutil.colors.green(path) + '...');
  },

  end: function (path) {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    gutil.log('Bundled', gutil.colors.green(path), 'in', gutil.colors.magenta(prettyTime));
  }
};