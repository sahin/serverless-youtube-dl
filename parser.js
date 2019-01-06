'use strict';

var lib = require('./lib');

module.exports.handler = function(event, context, cb) {
  //console.log(event);
  lib.videoInfo(event, function(err, resp) {
    // console.log(response);
    const response = {
      statusCode: 200,
      body: JSON.stringify(resp),
    };
    cb(null, response);
  });
};
