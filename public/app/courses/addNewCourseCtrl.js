angular.module('album').controller('addNewCourseCtrl', function($scope,alert,$window,courseService,courseCached,courseFact,$state){
    //   $scope.fname = identityFact.currentUser.firstName;
    // $scope.lname = identityFact.currentUser.lastName;

$scope.addCourse = function(){
       var newCourseData = {
            name: $scope.name,
            category: $scope.category,
            level: $scope.level,
            instructor:$scope.instructor,
            published : new Date()
         
        };
        console.log(newCourseData);
      courseFact.createCourse(newCourseData).then(function() {
             alert('success', 'Successfully Added', 'New course !:)');
             $window.location.reload();
             $state.go('courses');
        }, function(reason) {
            alert('warning', 'Something went wrong', 'please verify !:(');
        })
}
})