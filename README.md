[lzwCompress.js] (http://floydpink.github.com/lzwCompress.js/ "Compress/Decompress your JS artifacts")
==============

Lossless LZW compression/decompression implemented in JavaScript for strings/JSON/JS objects. 

### Usage:

```javascript
// To compress anything from within JS
var compressed = lzwCompress.pack(humongousObj);

// And to decompress it
var original = lzwCompress.unpack(compressed);
```

Does LZW compression and JSON key optimization and makes JSON (or any javascript object) smaller for local storage, to ship up to the server etc.



#### The MIT License (MIT)

##### Copyright (c) 2012 Haridas Pachuveetil
--------------------------------------

<sup>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</sup>

<sup>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</sup>

<sup>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</sup>

Just so I could earn some bragging rights, please endorse me on coderwall!

[![endorse](https://api.coderwall.com/floydpink/endorsecount.png)](https://coderwall.com/floydpink)
