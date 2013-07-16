var db = require('../dbFactory').getDb();
var tenantIdTag = '__tenant';
var validate = function(tenantId, collectionId, obj, query){
    if(!tenantId){
        throw new Error("tenantId can't be empty");
    }
    if(!collectionId){
        throw new Error("collectionId can't be empty");
    }
    if(obj&&obj[tenantIdTag]){
        throw new Error('Can\'t access system tenant key');
    }
    if(query&&query[tenantIdTag]){
        throw new Error('Can\'t query system tenant key');
    }
};

exports.addNew = function(tenantId, collectionId, obj, callback){
    validate(tenantId, collectionId, obj);
    if(!obj){
        throw new Error('Can\'t add null obj');
    }
    var collection = db.collection(collectionId);
    obj[tenantIdTag] = tenantId;
    collection.save(obj, callback);
};

exports.update = function(tenantId, collectionId, query, obj, callback){
    validate(tenantId, collection, obj, query);
    if(!obj){
        throw new Error('Can\'t add null obj');
    }
    var collection = db.collection(collectionId);
    var q = query?query:{};
    q[tenantIdTag] = tenantId;
    users.findAndModify({
        query: q,
        update: { $set: obj },
        new: false
    }, callback);
};

exports.delete = function(tenantId, collectionId, query, callback){
    validate(tenantId, collection, null, query);
    var collection = db.collection(collectionId);
    var q = query?query:{};
    q[tenantIdTag] = tenantId;

    collection.remove(query, callback);
};

exports.find = function(tenantId, collectionId, query, callback){
    validate(tenantId, collection, null, query);
    var collection = db.collection(collectionId);
    var q = query?query:{};
    q[tenantIdTag] = tenantId;

    collection.find(q, function(err, docs){
        callback(err, docs);
    });
};

exports.findOne = function(tenantId, collectionId, query, callback){
    validate(tenantId, collection, null, query);
    var collection = db.collection(collectionId);
    var q = query?query:{};
    q[tenantIdTag] = tenantId;

    collection.findOne(q, function(err, doc){
        callback(err, doc);
    });
};