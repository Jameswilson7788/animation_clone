const flash = require('express-flash');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const database = require('./config/database');
const MongoStore = require('connect-mongo/es5')(session);




const secret = require('./config/database.js');

module.exports = function(app){
  //ejs
  app.engine('ejs',ejsMate);
  app.set('view engine','ejs');
  //logger
  app.use(logger('dev'));
  //mongoose connect
  mongoose.connect(secret.database,function(err){
      if(err) throw err;
      console.log('successfully Connecting Database');
  });
  //bodyParser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  //cookieParser
  app.use(cookieParser());
  //session
  app.use(session({
		resave:true,
		saveUninitialized: true,
		secret:database.secretKey,
		store:new MongoStore({url:database.database,autoReconnect:true})
  }));
  //flash
  app.use(flash());
  app.use(function(req,res,next){
		res.locals.user = req.user;
		next();
	});
}
