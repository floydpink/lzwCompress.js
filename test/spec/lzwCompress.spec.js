'use strict';

describe('lzwCompress Tests', function () {

  var obj1, obj2, obj3, array1, array2, array3, array4, largeJSON;

  beforeEach(function () {
    jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';

    obj1 = getJSONFixture('obj1.json');
    obj2 = [
      {},
      {}
    ];
    obj3 = {};
    array1 = [];
    array2 = [
      2, 3, 4, -1, 5
    ];
    array3 = ['test1', "test2", 23, {}];
    array4 = [
      {
        id   : 1,
        name : 'one'
      },
      {
        id   : 2,
        name : 'two'
      },
      {
        id   : 3,
        name : 'three'
      }
    ];
    largeJSON = getJSONFixture('large.json');

    // Uncomment the below line to enable logging
    // lzwCompress.enableLogging(true);
  });

  describe('simple types', function () {

    it('should pack and unpack all test cases', function () {
      expect(lzwCompress.unpack(lzwCompress.pack(undefined))).toBeUndefined();
      expect(lzwCompress.unpack(lzwCompress.pack(null))).toBeNull();
      expect(lzwCompress.unpack(lzwCompress.pack(0))).toEqual(0);
      expect(lzwCompress.unpack(lzwCompress.pack(1))).toEqual(1);
      expect(lzwCompress.unpack(lzwCompress.pack(NaN))).toBeNaN();
      expect(lzwCompress.unpack(lzwCompress.pack(590824234800))).toEqual(590824234800);
      expect(lzwCompress.unpack(lzwCompress.pack(30.28))).toEqual(30.28);
      expect(lzwCompress.unpack(lzwCompress.pack(false))).toEqual(false);
      expect(lzwCompress.unpack(lzwCompress.pack(true))).toEqual(true);
    });

  });

  describe('date', function () {

    var date = new Date();
    it('should pack and unpack all test cases', function () {
      expect(lzwCompress.unpack(lzwCompress.pack(date))).toEqual(date);
    });

  });

  describe('strings', function () {

    it('should pack and unpack all test cases', function () {
      expect(lzwCompress.unpack(lzwCompress.pack('lzwCompress.js'))).toEqual('lzwCompress.js');
      expect(lzwCompress.unpack(lzwCompress.pack('\u2308\u0156asdlmasd;\'"klslmlsd:&%$#@_098*'))).toEqual('\u2308\u0156asdlmasd;\'"klslmlsd:&%$#@_098*');
      expect(lzwCompress.unpack(lzwCompress.pack(JSON.stringify(obj1)))).toEqual(JSON.stringify(obj1));
      expect(lzwCompress.unpack(lzwCompress.pack(JSON.stringify(obj2)))).toEqual(JSON.stringify(obj2));
      expect(lzwCompress.unpack(lzwCompress.pack(JSON.stringify(obj3)))).toEqual(JSON.stringify(obj3));
      expect(lzwCompress.unpack(lzwCompress.pack(JSON.stringify(array1)))).toEqual(JSON.stringify(array1));
      expect(lzwCompress.unpack(lzwCompress.pack('""'))).toEqual('""');  // issue #1 - https://github.com/floydpink/lzwCompress.js/issues/1
      expect(lzwCompress.unpack(lzwCompress.pack('"{\\"abnabnabn\\":\\"asd\\"}"'))).toEqual('"{\\"abnabnabn\\":\\"asd\\"}"'); // issue #1 - https://github.com/floydpink/lzwCompress.js/issues/1
    });

  });

  describe('arrays', function () {

    it('should pack and unpack all test cases', function () {
      expect(lzwCompress.unpack(lzwCompress.pack(array1))).toEqual(array1);
      expect(lzwCompress.unpack(lzwCompress.pack(array2))).toEqual(array2);
      expect(lzwCompress.unpack(lzwCompress.pack(array3))).toEqual(array3);
      expect(lzwCompress.unpack(lzwCompress.pack(array4))).toEqual(array4);
    });

  });

  describe('objects', function () {

    it('should pack and unpack all test cases', function () {
      expect(lzwCompress.unpack(lzwCompress.pack(obj1))).toEqual(obj1);
      expect(lzwCompress.unpack(lzwCompress.pack(obj2))).toEqual(obj2);
      expect(lzwCompress.unpack(lzwCompress.pack(obj3))).toEqual(obj3);
    });

  });

  describe('large json', function () {

    it('should pack and unpack all test cases', function () {
      expect(lzwCompress.unpack(lzwCompress.pack(largeJSON))).toEqual(largeJSON);
    });

  });

});
