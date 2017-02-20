var auth= require('./auth'),
    users = require('../controllers/users'),
    courses = require('../controllers/courses'),
        events = require('../controllers/events'),
  mongoose = require('mongoose'),
  user = mongoose.model('user');
  module.exports = function (app) {

    app.get('/api/users',auth.requiresRoles('admin'), users.getUsers);
    app.post('/api/users',users.createUser);
    app.put('/api/users',users.updateUser);
   

    app.post('/login',auth.authenticate);

    app.post('/logout',function(req,res){
        req.logout();
        res.end();
    });

     app.get('/api/courses',courses.getCourses);
    app.get('/api/courses/:id',courses.getCourseById);
    app.post('/api/courses',courses.createCourse);

    
     app.get('/api/events',events.getEvents);
    app.get('/api/events/:id',events.getEventById);
    app.post('/api/events',events.createEvent);

    app.all('/api/*',function(req,res){
       res.send(404);
    })

    app.get('*', function(req, res) {
        res.render('index',{
            bootstrappedUser:req.user
        });

    });

}