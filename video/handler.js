'use strict';

var lib = require('./lib');

module.exports.handler = function(event, context, cb) {
  console.log(event);
  lib.videoInfo(event, function(error, response) {
    return context.done(error, response);
  });
};
