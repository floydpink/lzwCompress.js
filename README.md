lzwCompress.js
==============

Lossless LZW compression/decompression implemented in JavaScript for strings/JSON/JS objects

### Usage:

```javascript

// To compress anything from within JS
var compressed = lzwCompress.pack(humongousObj);

// And to uncompress it
var original = lzwCompress.unpack(compressed);

```

Does LZW compression and JSON key optimization and makes JSON (or any javascript object) smaller for local storage, to ship up to the server etc.