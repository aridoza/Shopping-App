const mongodb = require('mongodb');
const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoClient = mongodb.MongoClient;
const mongoUrl = 'mongodb://localhost:27017/ProductsAlpha';
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Get home page
app.get('/', function(req, res){
  console.log("incoming GET request...");
  const clothing = apparel.find().toArray(function(err, result){
    if(err){
      console.log("Error:", err);
    } else {
      res.json("Root page with all products");
    }
  })
})

app.listen(PORT, function(){
  console.log("listening on port ", PORT);
})
