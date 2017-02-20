angular.module('album').controller('loginCtrl', function($scope, $http, $state, $rootScope, alert, identityFact, authFact){
 $scope.identity = identityFact;
    $scope.login = function(username, password){

        authFact.authenticateUser(username, password).then (function(success){
            if(success){
            alert('success', 'Thanks !','for Comming Back :)');
            $state.go('courses');
            }else{
            alert('warning', 'opps !','could not log in :(');
            }
        })
    }

  
});