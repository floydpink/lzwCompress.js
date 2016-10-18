[lzwCompress.js](http://floydpink.github.io/lzwCompress.js/)
==============

[![npm](https://img.shields.io/npm/v/lzwcompress.svg)](https://www.npmjs.com/package/lzwcompress) [![Travis](https://img.shields.io/travis/floydpink/lzwCompress.js.svg)](https://travis-ci.org/floydpink/lzwCompress.js) [![Code Climate](https://img.shields.io/codeclimate/github/floydpink/lzwCompress.js.svg)](https://codeclimate.com/github/floydpink/lzwCompress.js/code) [![Code Climate](https://img.shields.io/codeclimate/coverage/github/floydpink/lzwCompress.js.svg)](https://codeclimate.com/github/floydpink/lzwCompress.js/coverage) [![David](https://img.shields.io/david/dev/floydpink/lzwCompress.js.svg)](https://david-dm.org/floydpink/lzwCompress.js#info=devDependencies&view=table)

Lossless LZW compression/decompression implemented in JavaScript for strings/JSON/JS objects.

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

For  use in an Angular 1 project see [angular-lzwcompress](https://github.com/aengus1/angular-lzwcompress)


Applies LZW compression and JSON key optimization and makes JSON (or any javascript object) smaller for local storage, to ship up to the server etc.

### License

[MIT License](LICENSE)
