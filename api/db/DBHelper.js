var mongodb = require('mongodb');
var client = mongodb.MongoClient;
var con = 'mongodb://127.0.0.1:27017/lvyou';
var apiResult = require('../apiresult/apiresult').apiresult;

var db;
client.connect(con,function(_err,_db){
	if(_err){
		console.log(_err);
		return;
	}else{
		console.log('已经链接上');
		db = _db;
	}
})





module.exports = {
	select:function(_collection,_data,cb){
		var collection = db.collection(_collection);
		collection.find(_data || {}).toArray(function(err,result){
			filter(err,result,cb);
		});
	},
	insert:function(_collection,_data,cb){
		db.collection(_collection).insert(_data,function(err,res){
			filter(err,res,cb);
		})

	}
}


function filter(err,result,cb){
	console.log(result);
	if(err){
		cb(apiResult(err));
	}else{
		cb(apiResult(true,result));
	}
}