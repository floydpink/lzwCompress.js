// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-07-31 using
// generator-karma 1.0.0

var puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = function (config) {
  'use strict';

  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.error('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
  }

  // Browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/OS combos
  var customLaunchers = {
    'sl_macOS_High_Sierra_Chrome'  : {
      base        : 'SauceLabs',
      platform    : 'macOS 10.13',
      browserName : 'Chrome'
    },
    'sl_macOS_High_Sierra_Safari'  : {
      base        : 'SauceLabs',
      platform    : 'macOS 10.13',
      browserName : 'Safari'
    },
    'sl_macOS_High_Sierra_Firefox' : {
      base        : 'SauceLabs',
      platform    : 'macOS 10.13',
      browserName : 'Firefox'
    },
    'sl_macOS_Sierra_Chrome'       : {
      base        : 'SauceLabs',
      platform    : 'macOS 10.12',
      browserName : 'Chrome'
    },
    'sl_macOS_Sierra_Safari'       : {
      base        : 'SauceLabs',
      platform    : 'macOS 10.12',
      browserName : 'Safari'
    },
    'sl_macOS_Sierra_Firefox'      : {
      base        : 'SauceLabs',
      platform    : 'macOS 10.12',
      browserName : 'Firefox'
    },
    'sl_OSX_El_Capitan_Chrome'     : {
      base        : 'SauceLabs',
      platform    : 'OS X 10.11',
      browserName : 'Chrome'
    },
    'sl_OSX_El_Capitan_Safari'     : {
      base        : 'SauceLabs',
      platform    : 'OS X 10.11',
      browserName : 'Safari'
    },
    'sl_OSX_El_Capitan_Firefox'    : {
      base        : 'SauceLabs',
      platform    : 'OS X 10.11',
      browserName : 'Firefox'
    },
    'sl_Win10_Edge_13'             : {
      base        : 'SauceLabs',
      platform    : 'Windows 10',
      browserName : 'MicrosoftEdge',
      version     : '13.10586'
    },
    'sl_Win10_Edge_14'             : {
      base        : 'SauceLabs',
      platform    : 'Windows 10',
      browserName : 'MicrosoftEdge',
      version     : '14.14393'
    },
    'sl_Win10_Edge_15'             : {
      base        : 'SauceLabs',
      platform    : 'Windows 10',
      browserName : 'MicrosoftEdge',
      version     : '15.15063'
    },
    'sl_Win10_Edge_16'             : {
      base        : 'SauceLabs',
      platform    : 'Windows 10',
      browserName : 'MicrosoftEdge',
      version     : '16.16299'
    },
    'sl_Win10_Edge_17'             : {
      base        : 'SauceLabs',
      platform    : 'Windows 10',
      browserName : 'MicrosoftEdge',
      version     : '17.17134'
    },
    'sl_Win10_IE11'                : {
      base        : 'SauceLabs',
      platform    : 'Windows 10',
      browserName : 'Internet Explorer',
      version     : '11.103'
    },
    'sl_Win81_IE11'                : {
      base        : 'SauceLabs',
      platform    : 'Windows 8.1',
      browserName : 'Internet Explorer',
      version     : '11.0'
    },
    'sl_Win8_IE10'                 : {
      base        : 'SauceLabs',
      platform    : 'Windows 8',
      browserName : 'Internet Explorer',
      version     : '10.0'
    },
    'sl_Win10_Chrome'              : {
      base        : 'SauceLabs',
      platform    : 'Windows 10',
      browserName : 'Chrome'
    },
    'sl_Win81_Chrome'              : {
      base        : 'SauceLabs',
      platform    : 'Windows 8.1',
      browserName : 'Chrome'
    },
    'sl_Win8_Chrome'               : {
      base        : 'SauceLabs',
      platform    : 'Windows 8',
      browserName : 'Chrome'
    },
    'sl_Win7_Chrome'               : {
      base        : 'SauceLabs',
      platform    : 'Windows 7',
      browserName : 'Chrome'
    },
    'sl_Win10_Firefox'             : {
      base        : 'SauceLabs',
      platform    : 'Windows 10',
      browserName : 'Firefox'
    },
    'sl_Win81_Firefox'             : {
      base        : 'SauceLabs',
      platform    : 'Windows 8.1',
      browserName : 'Firefox'
    },
    'sl_Win8_Firefox'              : {
      base        : 'SauceLabs',
      platform    : 'Windows 8',
      browserName : 'Firefox'
    },
    'sl_Win7_Firefox'              : {
      base        : 'SauceLabs',
      platform    : 'Windows 7',
      browserName : 'Firefox'
    }
  };

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch : true,

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
    browsers : Object.keys(customLaunchers),

    // Which plugins to enable
    plugins : [
      "karma-chrome-launcher",
      "karma-sauce-launcher",
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
    reporters : ['spec', 'coverage', 'saucelabs'],

    specReporter : {maxLogLines : 10},

    preprocessors : {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'lzwCompress.js' : ['coverage']
    },

    // Sauce Labs config
    sauceLabs       : {
      testName          : 'lzwCompress.js on Sauce Labs',
      recordScreenshots : false,
      tunnelIdentifier  : process.env.TRAVIS_JOB_NUMBER,
      startConnect      : false,
      public            : 'public'
    },
    // Increase timeout in case connection in CI is slow
    captureTimeout  : 120000,
    customLaunchers : customLaunchers,

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
