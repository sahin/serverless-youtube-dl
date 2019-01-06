'use strict';

const ytdl = require('youtube-dl');

const parseValidUrl = require('./helpers/parseValidUrl.js').default;
const getYtdlInfo = require('./helpers/getYtdlInfo.js').default;

module.exports.videoInfo = function(event, cb) {

  if (!event.queryStringParameters.url) {
    return cb(null, { error: 'A URL must be provided.', event: event });
  }

  let parsedUrl;
  try {
    parsedUrl = parseValidUrl(event.queryStringParameters.url);
  } catch (error) {
    return cb(null, { error: error.message });
  }

  getYtdlInfo(parsedUrl.href)
    .then((videoInfo) => {
      // console.log(videoInfo)
      if(event.queryStringParameters.raw == "1") {
        return cb(null, videoInfo);
      } else {
        const data = {
          title: videoInfo.title,
          duration: videoInfo.duration,
          description: videoInfo.description,
          tags: videoInfo.tags,
          author: videoInfo.uploader,
          thumbnails: [
            {
              url: videoInfo.thumbnail,
            },
          ],
          sources: [

          ],
        };
        return cb(null, data);
      }
    })
    .catch((error) => {
      return cb(null, { error: error });
    });
};
