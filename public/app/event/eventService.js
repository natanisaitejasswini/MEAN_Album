angular.module('album').factory('eventService', function($resource) {
     var eventService = $resource('/api/events/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });
 return eventService;
});

