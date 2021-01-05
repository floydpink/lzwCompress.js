[lzwCompress.js](http://floydpink.github.io/lzwCompress.js/)
==============

[![npm](https://img.shields.io/npm/v/lzwcompress.svg)](https://www.npmjs.com/package/lzwcompress) [![CircleCI](https://img.shields.io/circleci/build/github/floydpink/lzwCompress.js/main)](https://app.circleci.com/pipelines/github/floydpink/lzwCompress.js?branch=main) [![Appveyor](https://ci.appveyor.com/api/projects/status/o9414h87kwob2equ/branch/main?svg=true)](https://ci.appveyor.com/project/floydpink/lzwcompress-js/branch/main) [![Coverage Status](https://coveralls.io/repos/github/floydpink/lzwCompress.js/badge.svg?branch=main)](https://coveralls.io/github/floydpink/lzwCompress.js?branch=main) [![codecov](https://codecov.io/gh/floydpink/lzwCompress.js/branch/main/graph/badge.svg)](https://codecov.io/gh/floydpink/lzwCompress.js) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ffloydpink%2FlzwCompress.js.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Ffloydpink%2FlzwCompress.js?ref=badge_shield)

> Lossless LZW compression/decompression implemented in JavaScript for strings/JSON/JS objects.

### Usage:

Install lzwCompress from npm:

```
npm install lzwcompress
```

And then to use it in your node.js applications:

```ecmascript 6
import lzwCompress from 'lzwcompress';

const json = {
  name: 'Mr. JavaScript Kumar',
  age: 42,
  start_date: new Date(),
  address: {
    street: '123 MG Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India'
  }
};

// to compress objects
const compressed = lzwCompress.pack(json);

// to uncomress
const original = lzwCompress.unpack(compressed);

console.log(original);
```

Applies LZW compression and JSON key optimization and makes JSON (or any javascript object) smaller for local storage, to ship up to the server etc.

### License

[MIT License](LICENSE)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ffloydpink%2FlzwCompress.js.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Ffloydpink%2FlzwCompress.js?ref=badge_large)

### Other Libraries

For use in Angular 1.X projects, check out the [angular-lzwcompress](https://github.com/aengus1/angular-lzwcompress) module
