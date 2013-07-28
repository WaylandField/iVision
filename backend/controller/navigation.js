var dao = require('./../dao/base');

exports.getNavi = {
    path: '/api/navi',
    method:'get',
    run: function(req, res){
    	var user = req.session.user;
	var menuId = user.menuId;
        dao.findOne('navi', {"id": menuId}, function(err, doc){
            if(err){
                res.send("{success:0, msg:'Error to find "+collectionId+"'}");
            }else{
                res.send({user: user, menu: doc});
            }
	});
    }
};