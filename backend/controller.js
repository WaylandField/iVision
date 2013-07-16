var fs = require('fs');
module.exports = function(app, options){
    var verbose = options.verbose;
    verbose && console.log("----------Load Controller started--------------------------");
    fs.readdirSync(__dirname+ '/controller').forEach(function(name){
        if(!name){
//            verbose && console.log('  Ignore %s:', name);
            return;
        }
        var re = /^\w+\.js$/ig;
        if(!re.test(name)){
//            verbose && console.log('  Ignore %s:', name);
            return;
        }
        verbose && console.log('Process Controller  %s:', name);
        var actions = require('./controller/'+name);
        for(var k in actions){
            var action = actions[k];
            var path = action.path?action.path:'/'+name;
            var method = action.method?action.method:'all';
            if(action.before){
                app[method](path, action.before);
                verbose && console.log(method+':'+path+': -- Before' );
            }
            if(action.run){
                app[method](path, action.run);
                verbose && console.log(method+':'+path+': -- RUN' );
            }
        }
    });
    verbose && console.log("----------Load Controller Completed--------------------------");
};