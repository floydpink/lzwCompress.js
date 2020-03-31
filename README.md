[lzwCompress.js](http://floydpink.github.io/lzwCompress.js/)
==============

[![npm](https://img.shields.io/npm/v/lzwcompress.svg)](https://www.npmjs.com/package/lzwcompress) [![Travis](https://img.shields.io/travis/floydpink/lzwCompress.js.svg)](https://travis-ci.org/floydpink/lzwCompress.js) [![Coverage Status](https://coveralls.io/repos/github/floydpink/lzwCompress.js/badge.svg?branch=master)](https://coveralls.io/github/floydpink/lzwCompress.js?branch=master) [![David](https://img.shields.io/david/dev/floydpink/lzwCompress.js.svg)](https://david-dm.org/floydpink/lzwCompress.js#info=devDependencies&view=table) [![Build Status](https://saucelabs.com/buildstatus/floydpink)](https://saucelabs.com/beta/builds/4aa2f9473e934e3382029114eb92dc31) [![codecov](https://codecov.io/gh/floydpink/lzwCompress.js/branch/master/graph/badge.svg)](https://codecov.io/gh/floydpink/lzwCompress.js) 

[![Build Status](https://saucelabs.com/browser-matrix/floydpink.svg)](https://saucelabs.com/beta/builds/4aa2f9473e934e3382029114eb92dc31)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ffloydpink%2FlzwCompress.js.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Ffloydpink%2FlzwCompress.js?ref=badge_shield)

> Lossless LZW compression/decompression implemented in JavaScript for strings/JSON/JS objects.

### Usage:

#### Node

Install lzwCompress from npm:

```
npm install lzwcompress
```

And then to use it in your node.js applications:

```javascript
var lzwCompress = require('lzwcompress');

...

// To compress anything from within JS
var compressed = lzwCompress.pack(humongousObj);

...

// And to decompress it
var original = lzwCompress.unpack(compressed);
```

#### Browser

Install lzwCompress from npm:

```
bower install --save lzwcompress
```

Then include lzwCompress.js using a script tag in your HTML:

```html
<script src="lzwCompress.js"></script>
```

And then use it in your browser applications:

```javascript
var lzwCompress = window.lzwCompress;

...

// To compress anything from within JS
var compressed = lzwCompress.pack(humongousObj);

...

// And to decompress it
var original = lzwCompress.unpack(compressed);
```

Applies LZW compression and JSON key optimization and makes JSON (or any javascript object) smaller for local storage, to ship up to the server etc.

### License

[MIT License](LICENSE)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ffloydpink%2FlzwCompress.js.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Ffloydpink%2FlzwCompress.js?ref=badge_large)

### Other Libraries

For use in Angular 1.X projects, check out the [angular-lzwcompress](https://github.com/aengus1/angular-lzwcompress) module