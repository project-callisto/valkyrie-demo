const express = require('express');
const path = require('path');

const app = express();
const DEFAULT_PORT = 8080

// automatically run webpack, unless running on production
if process.env.NODE_ENV !== 'production' {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const config = require('./webpack.config.js');

  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
}

var server = app.listen(process.env.PORT || DEFAULT_PORT, function() {
  console.log('Listening on port %d', server.address().port)
});

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
// IMPORTANT: this route needs to come last
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
