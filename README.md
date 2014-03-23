[lzwCompress.js] (http://floydpink.github.com/lzwCompress.js/ "Compress/Decompress your JS artifacts") [![Build Status](https://secure.travis-ci.org/floydpink/lzwCompress.js.png?branch=master)](http://travis-ci.org/floydpink/lzwCompress.js)
==============

Lossless LZW compression/decompression implemented in JavaScript for strings/JSON/JS objects.

### Usage:

```javascript
// To compress anything from within JS
var compressed = lzwCompress.pack(humongousObj);

// And to decompress it
var original = lzwCompress.unpack(compressed);
```

Applies LZW compression and JSON key optimization and makes JSON (or any javascript object) smaller for local storage, to ship up to the server etc.

[MIT License](LICENSE)

Just so I could earn some bragging rights, please endorse me on coderwall!

[![endorse](https://api.coderwall.com/floydpink/endorsecount.png)](https://coderwall.com/floydpink)
