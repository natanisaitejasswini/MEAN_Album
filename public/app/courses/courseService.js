angular.module('album').factory('courseService', function($resource) {
     var courseService = $resource('/api/courses/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });
 return courseService;
});

