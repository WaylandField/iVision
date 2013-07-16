var url = "iVision";
var db = require("mongojs").connect(url);
exports.getDb = function(){
    if(!db){
        console.log("error while loading database");
    }
    return db;
};

//var port = "27017";
//var host ="host";

//var Db = require('../mongodb').Db,
//    Server = Db.Server,
//    format = require('util').format;

//exports.connect = function(callback, errorHandle){
//    Db.connect(format("mongodb://%s:%s/?w=1", host, port), function(err, db){
//        if(err){
//            errorHandle(err);
//        }else{
//            callback(db);
//        }
//    });
//};

//exports.collection = function(collectionId, callback, errorHandle){
//    this.connect(collectionId, function(db){
//        db.connect(collectionId, );collection.findOne(query, 1);
//    });
//};

//exports.find = function();
