var express = require('express'),
 logger = require('morgan'),
 bodyParser = require('body-parser'),
 passport = require('passport'),
 cookieParser = require('cookie-parser'),
 session = require('express-session');

module.exports = function (app,config){

 app.use(logger('dev'));
app.use(cookieParser()); // Required for Sessions
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
app.use(session({secret: 'album online training', 
resave:false, saveUninitialized:false}));

  app.use (passport.initialize()) ;
  app.use (passport.session());
app.set("view engine", "ejs");

app.set('views', config.rootPath + '/server/views');

app.use("/public", express.static(config.rootPath + "/public"));


}
