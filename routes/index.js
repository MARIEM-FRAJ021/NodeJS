const { json } = require('express');
var express = require('express');
var router = express.Router();
var fs =require('fs');


var fileData= fs.readFileSync('./products.json', { encoding: 'utf-8' });
var jsonData = JSON.parse(fileData).data;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', (req, res) => {
  res.send(JSON.stringify(jsonData));
});

module.exports = router;
