angular.module('album').factory('courseCached',function(courseService){
    var courseList;

    return{
        query :function () {
            if(!courseList){
                courseList = courseService.query();
            }
            return courseList;
        },
    }
    return courseService;

})