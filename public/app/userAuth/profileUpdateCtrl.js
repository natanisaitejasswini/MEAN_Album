angular.module('album').controller('profileUpdateCtrl',function($scope,authFact,identityFact,alert){
    $scope.email = identityFact.currentUser.username;
    $scope.fname = identityFact.currentUser.firstName;
    $scope.lname = identityFact.currentUser.lastName;
$scope.updateProfile = function(){
    var newUserDate = {
        username : $scope.email,
        firstName : $scope.fname,
        lastName : $scope.lname
    }
    if($scope.password && $scope.password.length > 0){
        newUserData.password = $scope.password;
    }

    authFact.updateCurrentUser(newUserDate).then (function() {
           alert('success', 'Updated !','Your Account Has been Updated :)');
      
    },
        function (reason) {
             alert('warning', 'Something went Wroung !','please verify :(');
          
    })
}
});