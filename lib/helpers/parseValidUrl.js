'use strict';

const url = require('url');

function parseValidUrl(aUrl) {
  const parsedUrl = url.parse(aUrl);

  if (parsedUrl.href !== aUrl) {
    throw new Error('Provided URL did not parse correctly.');
  }

  if (['http:', 'https:'].indexOf(parsedUrl.protocol) === -1) {
    throw new Error('Provided URL must have "http" or "https" protocol.');
  }

  if (!parsedUrl.host) {
    throw new Error('Provided URL must have a host.');
  }

  if (!parsedUrl.path) {
    throw new Error('Provided URL must have a path.');
  }

  if (parsedUrl.auth) {
    throw new Error('Provided URL must not have authentication information.');
  }

  return parsedUrl;
}

module.exports = {
  default: parseValidUrl,
};
