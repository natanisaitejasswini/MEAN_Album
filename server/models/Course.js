var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    name: {type:String, required:'{PATH} is required!'},
    category: {type:String, required:'{PATH} is required!'},
    instructor: {type:String, required:'{PATH} is required!'},
    level: {type:String, required:'{PATH} is required!'},
    published: {type:Date, required:'{PATH} is required!'}
   
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
    Course.create({name: 'Angular Best practice-1', category:'Angular', instructor: 'Instructor-a',level: 'Begginer', published:'10/21/2016'}),
    Course.create({name: 'Angular Best practice-2', category:'Angular', instructor: 'Instructor-b',level: 'Intermediate', published:'10/26/2016'}),
     Course.create({name: '.Net Best practice-1', category:'.NET', instructor: 'Instructor-b',level: 'Begginer', published:'10/26/2016'}),
     Course.create({name: 'Angular Best practice-3', category:'Angular', instructor: 'Instructor-b',level: 'Advance', published:'10/26/2016'}),
     Course.create({name: 'Bootstrap Best practice-1', category:'Angular', instructor: 'Instructor-b',level: 'Begginer', published:'10/26/2016'}),
  Course.create({name: 'HTML Best practice-2', category:'HTML', instructor: 'Instructor-b',level: 'Begginer', published:'10/26/2016'}),
   Course.create({name: 'Knockout Best practice-2', category:'Knockout', instructor: 'Instructor-b',level: 'Begginer', published:'10/26/2016'}),
    Course.create({name: 'Karma Testing Best practice-2', category:'Testing', instructor: 'Instructor-c',level: 'Begginer', published:'10/26/2016'}),
    Course.create({name: 'Jquery Best practice-2', category:'Jquery', instructor: 'Instructor-d',level: 'Begginer', published:'10/26/2016'}),
    Course.create({name: 'Java Introduction', category:'Java', instructor: 'Instructor-b',level: 'Begginer', published:'10/26/2016'}),
    Course.create({name: 'Angular Introduction', category:'Angular', instructor: 'Instructor-a',level: 'Begginer', published:'10/26/2016'}),
    Course.create({name: '.NET Introduction', category:'.NET', instructor: 'Instructor-b',level: 'Begginer', published:'10/26/2016'}),
    Course.create({name: 'Bootstrap 3', category:'HTML', instructor: 'Instructor-a',level: 'Begginer', published:'10/26/2016'}),
    Course.create({name: 'High Charts Introduction', category:'Charts', instructor: 'Instructor-b',level: 'Intermediate', published:'10/26/2016'}),
    Course.create({name: 'Canvas Charts', category:'Charts', instructor: 'Instructor-b',level: 'Begginer', published:'10/26/2016'}),
    Course.create({name: 'Mocha Testing', category:'Testing', instructor: 'Instructor-a',level: 'Begginer', published:'10/26/2016'}),
    Course.create({name: 'MEAN Introduction', category:'Angular', instructor: 'Instructor-e',level: 'Begginer', published:'10/26/2016'}),
    Course.create({name: 'C# Introduction', category:'.NET', instructor: 'Instructor-b',level: 'Begginer', published:'10/26/2016'}),
    Course.create({name: 'MongoDb Introduction', category:'MongoDB', instructor: 'Instructor-a',level: 'Begginer', published:'10/26/2016'}),
    Course.create({name: 'UI Testing', category:'Testing', instructor: 'Instructor-b',level: 'Intermediate', published:'10/26/2016'}),
    Course.create({name: 'Full Stack Devlopment', category:'.NET', instructor: 'Instructor-c',level: 'Advance', published:'10/26/2016'}),
    Course.create({name: 'Bootstrap 4', category:'HTML', instructor: 'Instructor-b',level: 'Advance', published:'10/26/2016'}),
    Course.create({name: 'Javascript Introduction', category:'Javascript', instructor: 'Instructor-b',level: 'Begginer', published:'10/26/2016'}),
     Course.create({name: 'Javascript Advance', category:'Javascript', instructor: 'Instructor-b',level: 'Advance', published:'10/26/2016'}),
     Course.create({name: 'Angular Advance', category:'Angular', instructor: 'Instructor-b',level: 'Advance', published:'10/26/2016'}),
     Course.create({name: '.NET Advance', category:'.NET', instructor: 'Instructor-b',level: 'Advance', published:'10/26/2016'}),
     Course.create({name: 'High Charts with Angular', category:'Charts', instructor: 'Instructor-d',level: 'Intermediate', published:'10/26/2016'}),
     Course.create({name: 'High Charts with Jquery', category:'Charts', instructor: 'Instructor-d',level: 'Intermediate', published:'10/26/2016'}),
     Course.create({name: 'MongoDB Advance', category:'MongoDB', instructor: 'Instructor-b',level: 'Advance', published:'10/26/2016'}),
     Course.create({name: 'C# Advance', category:'.NET', instructor: 'Instructor-b',level: 'Advance', published:'10/26/2016'}),
     Course.create({name: 'Angular Best practice-4', category:'Angular', instructor: 'Instructor-d',level: 'Advance', published:'10/26/2016'})
        }
    })
}
exports.createDefaultCourses = createDefaultCourses;