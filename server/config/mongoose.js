var  mongoose = require ('mongoose'),
userModel = require('../models/User'),
courseModel = require('../models/Course'),
EventModel = require('../models/Event');


module.exports = function(config){
    //Mongoose Connection 
mongoose.connect (config.db);

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error.....'));
db.once('open', function callback(){
    console.log('Online Training DB Opened');
})

 userModel.createDefaultUsers();
   courseModel.createDefaultCourses();
   EventModel.createDefaultEvents();

}

