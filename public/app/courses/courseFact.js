angular.module('album').factory('courseFact', function(courseService, $q){
return{
    createCourse : function (newCourseData) {
            var newCourse = new courseService(newCourseData);
            var dfd = $q.defer();
            newCourse.$save().then(function(){
                dfd.resolve();
            },
            function (response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
    },
}
})