var dao = require('./../dao/base');
dao.find('page', {}, function(err, docs){
    docs.forEach(function(doc){
        console.log(doc.structure[0].navigation);
    });
});

