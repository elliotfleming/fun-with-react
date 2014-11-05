var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch(config.assets.src, ['assets']);
  gulp.watch(config.stylus.src, ['stylus']);
  gulp.watch(config.bower.styles.src, ['bower:styles']);
  gulp.watch(config.bower.scripts.src, ['bower:scripts']);
});