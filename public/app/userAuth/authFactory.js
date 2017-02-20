angular.module('album').factory('authFact', function($http, identityFact, $q,authService){
return{

  //Method to find User using callback sending to backend 
    authenticateUser: function(username,password){
        var dfd = $q.defer(); // to communicate back with controller of login for callback
          $http.post('/login',{username:username, password: password}).then(function(response){
            if(response.data.success){
              var user = new authService();
              angular.extend(user, response.data.user);
              identityFact.currentUser = user;
              dfd.resolve(true);
            }else{
              dfd.resolve(false);
            }
        });
       return dfd.promise;
    },
    //Updating Current User use Update method in mvUser
        updateCurrentUser : function (newUserData) {
          var dfd = $q.defer();

          var clone = angular.copy(identityFact.currentUser);
          angular.extend(clone,newUserData);
          clone.$update().then(function(){
              identityFact.currentUser = clone;
              dfd.resolve();
          },function(response){
              dfd.reject(response.data.reason);
          });
          return dfd.promise;
        },
//Method to Logout User using callback sending to backend 
    logoutuser : function(){
    var dfd = $q.defer();
    $http.post('/logout', {logout : true}).then(function(){
      identityFact.currentUser = undefined;
      dfd.resolve();
    });
    return dfd.promise;
    },

 //Creating New User
        createUser: function (newUserData) {
            var newUser = new authService(newUserData);
            console.log(newUser);
        
            var dfd = $q.defer();

            newUser.$save().then(function(){
                identityFact.currentUser = newUser;
                dfd.resolve();
            },
            function (response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        },
      //Authorization by role -- Admin page
        authorizeCurrentUserForRoute: function(role) {
            if(identityFact.isAuthorized(role)) {
                return true;
            } else {
                return $q.reject('not authorized');
            }

        },

        //Authorization by user login or not -- profile Page
        authorizeAuthenticatedUserForRoute: function() {
            if(identityFact.isAuthenticated()) {
                return true;
            } else {
                return $q.reject('not authorized');
            }

        }
}
})