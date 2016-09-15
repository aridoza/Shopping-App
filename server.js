const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const MONGOLAB_URI= 'mongodb://heroku_pcbjw1kg:40n682pbj0aua5d5n5hardjtut@ds033116.mlab.com:33116/heroku_pcbjw1kg';
const PORT = process.env.PORT || 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//define Mongoose Schema
const ProductsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  material: {
    type: String,
    required: true
  },
  imageMain: {
    type: String,
    required: true
  }
});

products = mongoose.model('Products', ProductsSchema);



mongoose.connect(MONGOLAB_URI, function (err){
  if (err) {
    console.log("mongooseconnect error:",err);
  } else {
    console.log("Mongo connected");
  }
});

app.get('/popsicles', function (req, res) {
  // res.json(200, {msg: 'OK'});
  res.json(res.data);
  console.log(res.data);
})

app.get('/popsicles', function (req, res){
  popsicles.find( function (err, result){
    res.json(200, result);
  });
})

app.use(express.static(__dirname + '/'))
app.listen(process.env.PORT || 5000);



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

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/dist/index.html')
// });
//
// app.listen(PORT, function(err) {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.info("Listening on port " + PORT + ".");
//   }
// });
