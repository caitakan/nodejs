var Users = require('../models/user');

var config = require('../../config');

var secretKey = config.secretKey;


module.exports = function(app, express){


	var api = express.Router();


	api.post('/signup', function(req, res){

		var users = new Users({
			name: req.body.name,
			username: req.body.username,
			Password: req.body.password
		});

		users.save(function(err){
			if(err){
				res.send(err);
				return;
			}else{

			res.json({message:'user has been created!'});}
		});
	});


	api.get('/users', function(req, res){

		Users.find({}, function(err, users){
			if(err){
				res.send(err);
				return;
			}

			res.json(users);

		});
	});


	return api;


}