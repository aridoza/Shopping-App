const mongodb = require('mongodb');
const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoClient = mongodb.MongoClient;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Get home page
