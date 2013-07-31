var express = require('express');
var app = express();
var key = "$2a$10$OxGuQiMV7wAsNx.oxEpGfuncm8Wg8haM6n5RWdcjfJIYfeQM/3Gva";
/** config **/
app.use('/', express.static(__dirname+'/web'));

app.use(express.logger());
app.use(express.bodyParser());

app.use(express.cookieParser(key));
app.use(express.session({
    secret: key,
    maxAge: 3600000
}));
app.use(app.router);
app.use(express.logger({ format: ':method :url' }));

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(err.stack);
  res.send(500, 'Something broke!');
});

require('./backend/controller')(app, {verbose:true});
app.listen(3000);