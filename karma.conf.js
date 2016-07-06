var path = require('path');

var conf = require(global.GULP_DIR + '/gulp.config');


// Karma configuration
// Generated on Sat Jul 25 2015 19:12:21 GMT+0530 (India Standard Time)
module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'scripts/app/**/*.module.js',
      'scripts/app/**/*.js',  //use wildcards in real apps
      'scripts/app/**/*spec.js' //use wildcards in real apps
    ],
    // list of files to exclude
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'jenkins'],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    // autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // singleRun: false
    plugins : [
      'karma-phantomjs-launcher',
      'karma-angular-filesort',
      'karma-phantomjs-shim',
      'karma-coverage',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jenkins-reporter'
    ],
    coverageReporter: conf.specs.coverage,
    angularFilesort: {
      whitelist: [path.join(conf.paths.js.base, '/**/!(*.html|*.spec|*.mock).js')]
    },
    jenkinsReporter: {
      outputFile: conf.specs.jenkinsReport,
      classnameSuffix: 'browser-test'
    }

  })
}
