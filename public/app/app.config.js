angular.module('album').config(function($urlRouterProvider,$stateProvider,$httpProvider){

    $urlRouterProvider.otherwise('/')
    

      var routeRoleChecks = {
        admin: {auth: function(authFact) {
            return authFact.authorizeCurrentUserForRoute('admin')
        }},
        user: {auth: function(authFact) {
            return authFact.authorizeAuthenticatedUserForRoute()
        }}
    }

      
    $stateProvider.state('main',{
        url : '/',
        templateUrl: '/public/app/main/main.ejs'
    })
    .state('login',{
        url : '/login',
        templateUrl: '/public/app/userAuth/login.ejs'
        //  controller:'loginCtrl.js'
    })
        .state('register',{
        url : '/register',
        templateUrl: '/public/app/userAuth/register.ejs',
         controller:'registerCtrl'
    })
      .state('courses',{
        url : '/courses',
        templateUrl: '/public/app/courses/course.ejs',
       
    })
      .state('users',{
        url : '/users',
        templateUrl: '/public/app/admin/users-list.ejs',
         controller:'usersListCtrl',
        //   resolve: routeRoleChecks.admin
    })
     .state('profileUpdate',{
        url : '/profileUpdate',
        templateUrl: '/public/app/userAuth/profileUpdate.ejs',
         controller:'profileUpdateCtrl',
          resolve: routeRoleChecks.user
    })
        .state('addNewCourse',{
        url : '/addNewCourse',
        templateUrl: '/public/app/courses/addNewCourse.ejs',
         controller:'addNewCourseCtrl',
        
    })
 
     .state('events',{
        url : '/events',
        templateUrl: '/public/app/event/event.ejs',
         controller:'eventCtrl',
         
    })
       .state('addNewEvent',{
        url : '/addNewEvent',
        templateUrl: '/public/app/event/addNewEvent.ejs',
         controller:'addNewEventCtrl',
         
    })
     .state('updateEvent',{
        url : '/editEvent',
        templateUrl: '/public/app/event/updateEvent.ejs',
         controller:'updateEventCtrl',
         
    });
})

angular.module('album').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    })
})
