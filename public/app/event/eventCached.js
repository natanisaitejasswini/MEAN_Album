angular.module('album').factory('eventCached',function(eventService){
    var eventList;

    return{
        query :function () {
            if(!eventList){
                eventList = eventService.query();
            }
            return eventList;
        },
    }
    return eventService;

})