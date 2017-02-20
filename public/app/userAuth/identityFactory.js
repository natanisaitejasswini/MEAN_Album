angular.module('album').factory('identityFact', function($window,authService,$http){

     var currentUser;
    //Page Persisting on Refresh when user logs in
    if(!!$window.bootstrappedUserObject) {
        currentUser = new authService();
        angular.extend(currentUser,$window.bootstrappedUserObject);
    }
return{
    currentUser : currentUser,
    isAuthenticated : function(){
        return !!this.currentUser;
    }
}
})