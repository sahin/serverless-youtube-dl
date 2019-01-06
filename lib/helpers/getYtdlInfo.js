const ytdl = require('youtube-dl');

function getYtdlInfo(url) {
  return new Promise((resolve, reject) => {
    ytdl(url, (error, info) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(info);
    });
  });
}

module.exports = {
  default: getYtdlInfo,
};
