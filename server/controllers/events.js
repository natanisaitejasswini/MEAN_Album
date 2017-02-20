var Event = require('mongoose').model('Event');

exports.getEvents = function(req, res) {
    Event.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};

exports.createEvent = function (req, res, next) {
    var newEventData = req.body;
    console.log(newEventData);
Event.create(newEventData,function (err,Event) {
        if(err) { res.status(400); return res.send({reason:err.toString()});}
        res.send(req.Event);
})
};

exports.getEventById = function(req, res) {
    Course.findOne({_id:req.params.id}).exec(function(err, event) {
        res.send(event);
    })
}