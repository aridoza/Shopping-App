const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html')
});

app.listen(PORT, function(err) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.info("Listening on port " + PORT + ".");
  }
});
