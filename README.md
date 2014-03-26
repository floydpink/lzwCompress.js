[lzwCompress.js](http://floydpink.github.io/lzwCompress.js/) [![NPM version](https://badge.fury.io/js/lzwcompress.png)](http://badge.fury.io/js/lzwcompress) [![Build Status](https://travis-ci.org/floydpink/lzwCompress.js.svg?branch=master)](https://travis-ci.org/floydpink/lzwCompress.js) [![Dependency Status](https://gemnasium.com/floydpink/lzwCompress.js.svg)](https://gemnasium.com/floydpink/lzwCompress.js)
==============

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

Include lzwCompress.js as a script tag:

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

Just so I could earn some bragging rights, please endorse me on coderwall!

[![endorse](https://api.coderwall.com/floydpink/endorsecount.png)](https://coderwall.com/floydpink)
