var db = require('../dbFactory').getDb();

exports.addNew = function(collectionId, objects, callback){
    var collection = db.collection(collectionId);
    collection.save(objects, callback);
};

exports.update = function(collectionId, query, object, callback){
    var collection = db.collection(collectionId);
    collection.findAndModify({
        query: query, 
        update: { $set: object }
    }, callback);
};

exports.updateMulti = function(collectionId, objects, callback){
    var collection = db.collection(collectionId);
    for(var k in objects){
     collection.findAndModify({
        query: {"_id":objects[k].id}, 
        update: { $set: objects[k] }
     }, function(arg1, arg2, arg3, arg4){
//         console.log(arg1);
//         console.log(arg2);
//         console.log(arg3);
     });
    }
};

exports.delete = function(collectionId, query, callback){
    var collection = db.collection(collectionId);
    collection.remove(query, callback);
};

exports.find = function(collectionId, query, callback){
    var collection = db.collection(collectionId);
    collection.find(query,{_id:0}, function(err, docs){
        callback(err, docs);
    });
};

exports.findOne = function(collectionId, query, callback){
    var collection = db.collection(collectionId);
    collection.findOne(query, {_id:0}, function(err, doc){
        callback(err, doc);
    });
};

exports.getObjectId = function(id){
    return id?db.ObjectId(id):db.ObjectId();
};

exports.close = function(){
    db.close();
};