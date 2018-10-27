/*
 * lzwCompress.js
 *
 * Copyright (c) 2014 floydpink
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg       : grunt.file.readJSON('package.json'),
    coveralls : {
      options : {
        force : true
      },
      lib     : {
        src : 'coverage/report-lcov/lcov.info'
      }
    },
    karma     : {
      options    : {
        configFile : 'test/karma.conf.js',
        port       : 9999
      },
      ci         : {
        singleRun : true
      },
      dev        : {
        singleRun : true,
        reporters : 'dots',
        browsers  : ['ChromeHeadless']
      },
      continuous : {
        reporters : 'dots',
        browsers  : ['ChromeHeadless']
      }
    },
    jshint    : {
      options   : {
        jshintrc : '.jshintrc',
        reporter : require('jshint-stylish')
      },
      gruntfile : {
        src : 'Gruntfile.js'
      },
      lib       : {
        src : ['lzwCompress.js', 'lib/**/*.js']
      },
      test      : {
        src : ['test/**/*.js']
      }
    },
    watch     : {
      gruntfile : {
        files : '<%= jshint.gruntfile.src %>',
        tasks : ['jshint:gruntfile']
      },
      lib       : {
        files : '<%= jshint.lib.src %>',
        tasks : ['jshint:lib', 'karma:continuous']
      },
      test      : {
        files : '<%= jshint.test.src %>',
        tasks : ['jshint:test', 'nodeunit']
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'karma:dev']);

  // Continuous Testing task.
  grunt.registerTask('continuous', ['jshint', 'karma:continuous']);

  // CI task
  grunt.registerTask('ci', ['jshint', 'karma:ci', 'coveralls']);
};
