angular.module('album').controller('registerCtrl', function($scope,alert,$state,authFact){
   $scope.signup = function() {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };
      authFact.createUser(newUserData).then(function() {

             alert('success', 'Successfully Registered', 'Thanks !:)');
             $state.go('courses');
        }, function(reason) {
            alert('warning', 'Something went wrong', 'please verify !:(');
        })

    }
})