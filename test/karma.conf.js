// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-07-31 using
// generator-karma 1.0.0

const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = function (config) {
  'use strict';

  if (!process.env.BROWSERSTACK_USERNAME || !process.env.BROWSERSTACK_ACCESS_KEY) {
    console.error('Make sure the BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY environment variables are set.');
  }

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch : true,

    // ensure localhost works: https://www.browserstack.com/question/759
    hostname : 'bs-local.com',

    // base path, that will be used to resolve files and exclude
    basePath : '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks : [
      "jasmine-jquery",
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files : [
      "lzwCompress.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js",
      // fixtures
      {pattern : 'test/mock/*.json', watched : true, served : true, included : false}
    ],

    // list of files / patterns to exclude
    exclude : [],

    // web server port
    port : 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers : ['ChromeHeadless'],

    // Which plugins to enable
    plugins : [
      "karma-chrome-launcher",
      "karma-jasmine",
      "karma-jasmine-jquery",
      "karma-spec-reporter",
      "karma-coverage"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun : false,

    colors : true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel : config.LOG_DEBUG,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'

    // coverage reporter generates the coverage
    reporters : ['spec', 'coverage'],

    specReporter : {maxLogLines : 10},

    preprocessors : {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'lzwCompress.js' : ['coverage']
    },

    // Increase timeout in case connection in CI is slow
    captureTimeout  : 120000,

    // configure the reporter
    coverageReporter : {
      dir       : 'coverage/',
      reporters : [
        // reporters not supporting the `file` property
        {type : 'html', subdir : 'report-html'},
        {type : 'lcov', subdir : 'report-lcov'},
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        {type : 'cobertura', subdir : '.', file : 'cobertura.txt'},
        {type : 'lcovonly', subdir : '.', file : 'report-lcovonly.txt'},
        {type : 'teamcity', subdir : '.', file : 'teamcity.txt'},
        {type : 'text', subdir : '.', file : 'text.txt'},
        {type : 'text-summary', subdir : '.', file : 'text-summary.txt'}
      ]
    }
  });
};
