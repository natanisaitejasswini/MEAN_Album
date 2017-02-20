var Course = require('mongoose').model('Course');

exports.getCourses = function(req, res) {
    Course.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};

exports.createCourse = function (req, res, next) {
    var newCourseData = req.body;
    console.log(newCourseData);
Course.create(newCourseData,function (err,course) {
        if(err) { res.status(400); return res.send({reason:err.toString()});}
        res.send(req.course);
})
};

exports.getCourseById = function(req, res) {
    Course.findOne({_id:req.params.id}).exec(function(err, course) {
        res.send(course);
    })
}