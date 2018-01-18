var express = require('express');
var app = new express();
var bodyParser = require('body-parser');

//webtoken
var jwt = require("jsonwebtoken");



module.exports = {
	userPost:function(app,db){
		app.post('/Login',function(req,res){
			console.log(req.body);
			db.select('customer',req.body,function(result){
				console.log(result);
				if(result.state == true){
					res.send(result.data);
				}else{
					res.send('err');
				}
			})
		});
		app.post('/adduser',function(req,res){
			var datas = Object.assign(req.body,md5(req.body.password));
			db.insert('customer',datas,function(result){
				if(result.state == true){
					res.send(result.data);
				}else{
					res.send('err');
				}
			})
		})
	}
}