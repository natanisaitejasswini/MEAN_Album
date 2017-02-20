angular.module('album')
.service('alert',function($rootScope, $interval){
    var alertTimeout;
  return function(type, title, message, timeout) {
        $rootScope.alert = {
            hasBeenShown: true,
            show: true,
            type: type,
            message: message,
            title: title
        };
        $interval.cancel(alertTimeout);
        alertTimeout = $interval(function() {
            $rootScope.alert.show = false;
        }, timeout || 2000);
    };
});