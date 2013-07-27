var userService = require('./../service/UserService');
var escapeUrl = {"/api/session":1};
exports.auth = {
    path : '*',
    method:'all',
    before: function(req, res, next){
	var url = req.url;
        if(!escapeUrl[url]&&(!req.session||!req.session.user)){
            res.send(401, {error:"Not autherized"});
        }else{
            next();
	}
    }
};

exports.login = {
    path: '/api/session',
    method: 'post',
    run: function(req, res){
	userService.login(req, function(err, success){
	    if(err){
		res.send(500, {error:"System Error"});
	    }else{
		if(success){
		    
		    res.send(200, {});
		}else{
		    res.send(401, {error:"AuthenticationError"});
		}
	    }
	});
    }
};

exports.logout ={
    path: '/api/session',
    method: 'del',
    run: function(req, res, next){
	req.session.distroy();
	res.send(200);
    }
};
