var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('../db/db');
	db = db.mongodb;

var path = require('path');

var product = require('./product/product');





module.exports = {
    start:function(port){
        app.use(bodyParser.urlencoded({extended:false}));
        app.use(bodyParser.json());
        app.use(express.static(path.join(__dirname, '/')));

		 app.all('*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.header("X-Powered-By",' 3.2.1')
            if(req.method=="OPTIONS") {
                res.send(200);
            } else {
                next();
            }
        });  

            product.getProduct(app,db);           
            app.listen(port);

	}
}
