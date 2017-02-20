angular.module('album').factory('eventFact', function(eventService, $q){
return{
    createEvent: function (newEventData) {
            var newEvent= new eventService(newEventData);
            var dfd = $q.defer();
            newEvent.$save().then(function(){
                dfd.resolve();
            },
            function (response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
    },

      
}

})