var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    title: {type:String, required:'{PATH} is required!'},
    type: {type:String, required:'{PATH} is required!'},
    city: {type:String, required:'{PATH} is required!'},
    state: {type:String, required:'{PATH} is required!'},
    attendees: {type:Number, required:'{PATH} is required!'},
    date: {type:Date, required:'{PATH} is required!'}
   
});
var Event = mongoose.model('Event', eventSchema);

function createDefaultEvents() {
    Event.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
    Event.create({title: 'manhattan run for social awareness', type:'Run', city: 'New York',state: 'NY',attendees: '25',  date:'02/15/2017'}),
    Event.create({title: 'Columbus run for Cancer awareness', type:'Run', city: 'Columbus',state: 'OH',attendees: '15',  date:'02/15/2017'}),
    Event.create({title: 'Columbus Food Festival', type:'Food', city: 'Columbus',state: 'OH',attendees: '35',  date:'02/15/2017'}),
    Event.create({title: 'Seattle Coding Champion', type:'Coding', city: 'Seattle',state: 'WA',attendees: '180',  date:'02/16/2017'}),
    Event.create({title: 'Street Car Racing  ', type:'Car Race', city: 'Arizona',state: 'AZ',attendees: '32',  date:'02/20/2017'}),
    Event.create({title: 'Pokemon Go Valentinian Day Event', type:'Pokemon Go', city: 'New York',state: 'NY',attendees: '250',  date:'02/19/2017'}),
    Event.create({title: 'Pokemon Go Street Fight Event', type:'Pokemon Go', city: 'Dallas',state: 'TX',attendees: '218',  date:'02/14/2017'})    
    }
    })
}
exports.createDefaultEvents = createDefaultEvents;