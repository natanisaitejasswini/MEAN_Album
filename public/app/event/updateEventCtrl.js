angular.module('album').controller('addNewEventCtrl', function($scope,alert,$window,eventService,eventCached,eventFact,$state){

$scope.editEvent = function($state){
       var updateEventData = {
         
            title: $scope.title,
            type: $scope.type,
            city: $scope.city,
            state:$scope.state,
            date : $scope.date,
           
         
        };
     
}
});