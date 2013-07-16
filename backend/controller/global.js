exports.auth = {
    path : '*',
    before: function(req, res, next){
//        if(!req.session||!req.session.user){
            //res.send("Not autherized");
//        }
        next();
    }
};

exports.upload = {
    path: '/service/upload',
    method:'post',
    before: function(req, res, next){
        next();
    },
    run : function(req, res){
        var fs = require('fs');
        var tmp_path = req.files.file.path;
        var target_path = './../static/upload/' + req.files.file.name;

        fs.rename(tmp_path, target_path, function(err) {
            if (err) throw err;
            fs.unlink(tmp_path, function() {
                res.send("/web/upload/"+req.files.file.name);
                if (err) throw err;
            });
        });
    }
};