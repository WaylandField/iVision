var bcrypt = require('bcrypt');
var dao = require('./../dao/base');
var service = {};
service.login = function(req, callback){
    var username = req.body.username;
    var password =  req.body.password;
    dao.findOne('user', {"username":username}, function(err, doc){
        if(err){
	    callback(err);
        }else{
	    service.comparePassword(password, doc.password, function(err, match){
		if(err){
		    callback(err);
		}else{
		    req.session.user = doc;
		    callback(null, match);
		}
	    });
        }
    });
};

service.cryptPassword = function(password, callback) {
    bcrypt.genSalt(10, function(err, salt) {
	if (err) return callback(err);
	else {
	    bcrypt.hash(password, salt, function(err, hash) {
		return callback(err, hash);
	    });
	}
    });
};

service.comparePassword = function(password, userPassword, callback) {
    bcrypt.compare(password, userPassword, function(err, isPasswordMatch) {
	if (err) return callback(err);
	else return callback(null, isPasswordMatch);
    });
};
module.exports = service;
