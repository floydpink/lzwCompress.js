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

var hugeJson = {"web-app":{
    "servlet":[
        {
            "servlet-name":"cofaxCDS",
            "servlet-class":"org.cofax.cds.CDSServlet",
            "init-param":{
                "configGlossary:installationAt":"Philadelphia, PA",
                "configGlossary:adminEmail":"ksm@pobox.com",
                "configGlossary:poweredBy":"Cofax",
                "configGlossary:poweredByIcon":"/images/cofax.gif",
                "configGlossary:staticPath":"/content/static",
                "templateProcessorClass":"org.cofax.WysiwygTemplate",
                "templateLoaderClass":"org.cofax.FilesTemplateLoader",
                "templatePath":"templates",
                "templateOverridePath":"",
                "defaultListTemplate":"listTemplate.htm",
                "defaultFileTemplate":"articleTemplate.htm",
                "useJSP":false,
                "jspListTemplate":"listTemplate.jsp",
                "jspFileTemplate":"articleTemplate.jsp",
                "cachePackageTagsTrack":200,
                "cachePackageTagsStore":200,
                "cachePackageTagsRefresh":60,
                "cacheTemplatesTrack":100,
                "cacheTemplatesStore":50,
                "cacheTemplatesRefresh":15,
                "cachePagesTrack":200,
                "cachePagesStore":100,
                "cachePagesRefresh":10,
                "cachePagesDirtyRead":10,
                "searchEngineListTemplate":"forSearchEnginesList.htm",
                "searchEngineFileTemplate":"forSearchEngines.htm",
                "searchEngineRobotsDb":"WEB-INF/robots.db",
                "useDataStore":true,
                "dataStoreClass":"org.cofax.SqlDataStore",
                "redirectionClass":"org.cofax.SqlRedirection",
                "dataStoreName":"cofax",
                "dataStoreDriver":"com.microsoft.jdbc.sqlserver.SQLServerDriver",
                "dataStoreUrl":"jdbc:microsoft:sqlserver://LOCALHOST:1433;DatabaseName=goon",
                "dataStoreUser":"sa",
                "dataStorePassword":"dataStoreTestQuery",
                "dataStoreTestQuery":"SET NOCOUNT ON;select test='test';",
                "dataStoreLogFile":"/usr/local/tomcat/logs/datastore.log",
                "dataStoreInitConns":10,
                "dataStoreMaxConns":100,
                "dataStoreConnUsageLimit":100,
                "dataStoreLogLevel":"debug",
                "maxUrlLength":500}},
        {
            "servlet-name":"cofaxEmail",
            "servlet-class":"org.cofax.cds.EmailServlet",
            "init-param":{
                "mailHost":"mail1",
                "mailHostOverride":"mail2"}},
        {
            "servlet-name":"cofaxAdmin",
            "servlet-class":"org.cofax.cds.AdminServlet"},

        {
            "servlet-name":"fileServlet",
            "servlet-class":"org.cofax.cds.FileServlet"},
        {
            "servlet-name":"cofaxTools",
            "servlet-class":"org.cofax.cms.CofaxToolsServlet",
            "init-param":{
                "templatePath":"toolstemplates/",
                "log":1,
                "logLocation":"/usr/local/tomcat/logs/CofaxTools.log",
                "logMaxSize":"",
                "dataLog":1,
                "dataLogLocation":"/usr/local/tomcat/logs/dataLog.log",
                "dataLogMaxSize":"",
                "removePageCache":"/content/admin/remove?cache=pages&id=",
                "removeTemplateCache":"/content/admin/remove?cache=templates&id=",
                "fileTransferFolder":"/usr/local/tomcat/webapps/content/fileTransferFolder",
                "lookInContext":1,
                "adminGroupID":4,
                "betaServer":true}}
    ],
    "servlet-mapping":{
        "cofaxCDS":"/",
        "cofaxEmail":"/cofaxutil/aemail/*",
        "cofaxAdmin":"/admin/*",
        "fileServlet":"/static/*",
        "cofaxTools":"/tools/*"},

    "taglib":{
        "taglib-uri":"cofax.tld",
        "taglib-location":"/WEB-INF/tlds/cofax.tld"}}};

lzwCompress.enableLogging(true);
var compressionTest = function (obj) {
        var packedObject = lzwCompress.pack(obj);
        deepEqual(lzwCompress.unpack(packedObject), obj, "Compress > Uncompress test for " + typeof(obj));
    };

module("lzwCompress.js Tests");

test("simple types", function () {
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

test("huge json", function () {
    compressionTest(hugeJson);
});

