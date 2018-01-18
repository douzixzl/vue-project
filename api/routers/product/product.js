
module.exports = {
	getProduct(app,db){
		app.get('/product',function(req,res){
			console.log('sss',req.body);
			db.select('house',req.body,function(result){
				console.log(result);
				res.send(result);
			})
		});

		app.post('/product',function(req,res){
			console.log('sss',req.body);
			db.select('house',req.body,function(result){
				console.log(result);
				res.send(result);
			})
		})
	}
}