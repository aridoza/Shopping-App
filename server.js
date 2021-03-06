var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongo = require('mongoskin');
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var PORT = process.env.PORT || 3000;

const PRODUCTS_COLLECTION = 'popsicles';

var app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname + "/public"));

var db;

// mongodb.MongoClient.connect('http://mongodb://aridoza:testingalpha1@ds033116.mlab.com:33116/aritestingdb/popsicles', function (err, database) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

//   db = database;
//   console.log("Database connection ready");
//
//   // App initialization
//   var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });
// });

var ProductsSchema = new mongoose.Schema ({
   name : String
  ,description : String
  ,gender : String
  ,size : String
  ,price : String
});

products = mongoose.model('Products', ProductsSchema);



mongoose.connect('mongodb://shopdude:testingalpha1@ds033116.mlab.com:33116/aritestingdb', function (err){
  if (err) {
    console.log("mongooseconnect error:",err);
  } else {
    console.log("Mongo connected");
  }
});

app.get('/', function (req, res) {
  db = mongo.db('mongodb://shopdude:testingalpha1@ds033116.mlab.com:33116/aritestingdb');
  db.collection(PRODUCTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      console.log("Error getting products", err);
    } else {
      // res.status(200).json(docs);
      console.log("Products Collection received");
    }
  });
});

// app.get('/popsicles', function (req, res){
//   popsicles.find( function (err, result){
//     res.json(200, result);
//   });
// })
//
// app.use(express.static(__dirname + '/'))
// app.listen(process.env.PORT || 5000);



// using webpack-dev-server and middleware in development environment
// if(process.env.NODE_ENV !== 'production') {
//   const webpackDevMiddleware = require('webpack-dev-middleware');
//   const webpackHotMiddleware = require('webpack-hot-middleware');
//   const webpack = require('webpack');
//   const config = require('./webpack.config');
//   const compiler = webpack(config);
//
//   app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
//   app.use(webpackHotMiddleware(compiler));
// }
//
// app.use(express.static(path.join(__dirname, 'dist')));

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/dist/index.html')
// });
//
app.listen(PORT, function(err) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.info("Listening on port " + PORT + ".");
  }
});
