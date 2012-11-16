var obj1 = {
    key1:2345,
    key2:"this is a string",
    key3:[
        {
            key31:23.56,
            key32:"this is another string",
            key33:"null",
            key34:null,
            key35:true,
            key36:false,
            key37:0
        },
        {
            key31:4223.56,
            key32:"this is yet another string",
            key33:"jsCompress",
            key34:567,
            key35:false,
            key36:true,
            key37:1
        }
    ]
};
var obj2 = [
    {},
    {}
];
var obj3 = {};
var obj4 = [];

lzwCompress.enableLogging(true);

var compressionTest = function (obj) {
    var packedObject = lzwCompress.pack(obj);
    deepEqual(lzwCompress.unpack(packedObject), obj, "Compress > Uncompress test for " + typeof(obj));
};

module("lzwCompress.js Tests");

test("primitive types", function () {
    compressionTest(undefined);
    compressionTest(null);
    compressionTest(0);
    compressionTest(1);
    compressionTest(NaN);
    compressionTest(590824234800);
    compressionTest(30.28);
    compressionTest(false);
    compressionTest(true);
});

test("date", function () {
    compressionTest(new Date());
});

test("string values", function () {
    compressionTest("lzwCompress.js");
    compressionTest("\u2308\u0156asdlmasd;'klslmlsd:&%$#@_098*");
    compressionTest(JSON.stringify(obj1));
    compressionTest(JSON.stringify(obj2));
    compressionTest(JSON.stringify(obj3));
    compressionTest(JSON.stringify(obj4));
});

test("objects", function () {
    compressionTest(obj1);
    compressionTest(obj2);
    compressionTest(obj3);
    compressionTest(obj4);
});

