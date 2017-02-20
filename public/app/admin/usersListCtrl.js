angular.module('album').controller('usersListCtrl', function($scope,authService){
$scope.users = authService.query(); 
})