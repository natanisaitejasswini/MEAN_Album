angular.module('album').controller('addNewEventCtrl', function($scope,alert,$window,eventService,eventCached,eventFact,$state){

$scope.addEvent = function(){
       var newEventData = {
            title: $scope.title,
            type: $scope.type,
            city: $scope.city,
            state:$scope.state,
            date : $scope.date,
            attendees : 0
         
        };
        console.log(newEventData);
      eventFact.createEvent(newEventData).then(function() {
             alert('success', 'Successfully Added', 'New Event !  :)');
            //  $window.location.reload();
             $state.go('events');
        }, function(reason) {
            alert('warning', 'Something went wrong', 'please verify !  :(');
        })
}
});