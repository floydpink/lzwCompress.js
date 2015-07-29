#!/bin/sh
set -e
npm install -g istanbul
istanbul cover node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/bin/nodeunit -- test
npm install -g codeclimate-test-reporter
codeclimate-test-reporter < coverage/lcov.info
