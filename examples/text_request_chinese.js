/*!
 * apiai
 * Copyright(c) 2015 http://api.ai/
 * Apache 2.0 Licensed
 */

'use strict';

// var apiai = require("../module/apiai");
var apiai = require("apiai");

var app = apiai("0eca2d2d94a8440885bd7cf4c2a92e93");

var options = {
    sessionId: '<UNIQE SESSION ID>',
    language: 'zh-CN'
};

var request = app.textRequest('什么叫发票', options);

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
