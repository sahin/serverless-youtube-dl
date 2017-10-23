# Serverless Youtube DL

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

Youtube downloader on Aws Lambda

## Install

Make sure you have the [Serverless Framework](http://www.serverless.com) installed and you're using Node.js v4.0+.
```
npm install serverless -g
```

Install the project using Serverless:
```
serverless project install serverless-youtube-dl
```

Install project dependencies via npm:
```
npm install
cd video
npm install
```

Deploy your functions and endpoints:
```
serverless dash deploy
```

## Alternative Install

If issues arise during installation, the steps below can be taken to install the project and initialize it.

Open a command line terminal and `cd` to the location where you will be placing the serverless-youtube-dl project.

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


## Idea by
* Sahin https://github.com/sahin

## Developed by
* Muhammet https://github.com/muhammet
