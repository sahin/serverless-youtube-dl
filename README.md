# Serverless Youtube DL

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

Youtube downloader on AWS Lambda

## Updates

* Jan 6 2019 - Updated Serverless Framework
* Jan 6 2019 - Switched youtube dl module to [przemyslawpluta/node-youtube-dl](https://github.com/przemyslawpluta/node-youtube-dl)
* Jan 5 2019 - Forked from [svtek/serverless-youtube-dl](https://github.com/svtek/serverless-youtube-dl) (last update Oct 23, 2017)

## Install

Make sure you have the [Serverless Framework](http://www.serverless.com) installed and you're using Node.js v4.0+.
```
npm install serverless -g
```

Clone the project directly from Github:

```
git clone git@github.com:movielala/serverless-youtube-dl.git
```

Enter the serverless-youtube-dl folder that was just created:
```
cd serverless-youtube-dl
```

Install all npm dependencies:
```
npm install
cd video
npm install
```

Initialize the project:
```
serverless project init
```

Deploy your functions and endpoints:
```
serverless dash deploy
```

## Examples

* https://your-api-gateway.com/your-stage/video?url=https://www.youtube.com/watch?v=UiyDmqO59QE
* https://your-api-gateway.com/your-stage/video?url=https://www.youtube.com/watch?v=UiyDmqO59QE&raw=1


## Original Idea by
* Sahin https://github.com/sahin

## Originally Developed by
* Muhammet https://github.com/muhammet
