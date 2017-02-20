angular.module('album').controller('headerCtrl', function($scope, identityFact, authFact, $state,alert){

    
   $scope.identity = identityFact;

     $scope.logout = function(){
        authFact.logoutuser().then (function(){
        $scope.username = "";
        $scope.password = "";
       alert('warning', 'Logged Out !','successfully  :)');
       $state.go('main');
        })
    }

   $scope.bootstrapNavbarHover =   function(){
    $('.dropdown').hover(function() {
        $(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });
};
})