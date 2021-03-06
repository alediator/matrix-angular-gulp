var plugins = require('gulp-load-plugins')({lazy: true});

var utils = require(global.GULP_DIR + '/utils');
var config = require(global.CONFIG_PATH || global.GULP_DIR + '/gulp.config');

/**
 * Builds the project for production environment.
 */
module.exports = {
  dep: [],
  fn: function (gulp, done) {
    utils.log('*** Building dist environment ***');

    global.environment = 'dist';
    if (config.packageMode === 'WEBPACK') {
      plugins.sequence.use(gulp)('webpack:dist', done);
    } else {
      plugins.sequence.use(gulp)(
        [
          'build:clean',
          'templatecache',
          'annotate',
          'build:minify:css',
          'build:minify:html'
        ],
        [
          'build:minify:js',
          'build:fonts:copy',
          'build:img:copy'
        ],
        'inject', done);
    }
  }
};
