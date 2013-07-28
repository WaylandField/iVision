var fs = require('fs');
var MAX_LEVEL = 2;
module.exports = function(app, options){
    var verbose = options.verbose;
    verbose && console.log("----------Load Controller started--------------------------");
    var controllers = fs.readdirSync(__dirname+ '/controller');
    var actionPool = [];
    if(controllers){
	for(var i in controllers){
	    var name = controllers[i];
            verbose && console.log('Process Controller  %s:', name);
            if(!name){
		//            verbose && console.log('  Ignore %s:', name);
		continue;
            }
            var re = /^\w+\.js$/ig;
            if(!re.test(name)){
		//            verbose && console.log('  Ignore %s:', name);
		continue;
            }
            var actions = require('./controller/'+name);
	    var level = actions.level;
	    if(level!=null){
		level = level>MAX_LEVEL?MAX_LEVEL:level;
	    }else{
		level = MAX_LEVEL;
	    }
	    if(!actionPool[level]){
		actionPool[level] = [];
	    }
	    actionPool[level].push(actions);
	}

	for(var i in actionPool){
	    var pool = actionPool[i];
	    if(!pool){
		continue;
	    }
	    verbose && console.log('---------------------- Controller level %s ------------------', i);
	    for(var j in pool){
		var actions = pool[j];
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
	    }
	}
    }
    /**
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
    **/
    verbose && console.log("----------Load Controller Completed--------------------------");
};