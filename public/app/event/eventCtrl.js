
var uniqueItems = function (data, key) {
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};

angular.module('album').controller('eventCtrl', function($scope,eventCached,$filter,filterFilter){

    
$scope.events = eventCached.query();

   $scope.viewby = 5;
  $scope.totalItems = $scope.events.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5; //Number of pager buttons to show

  $scope.useType = {};
  $scope.useState = {};
  $scope.useCity = {};
        // Watch the pants that are selected
    $scope.$watch(function () {
        return {
            events: $scope.events,
            useType: $scope.useType,
            useState: $scope.useState,
             useCity: $scope.useCity
           
        }
    }, function (value) {
        var selected;
        
        $scope.typeGroup = uniqueItems($scope.events, 'type');
        var filterAfterType = [];        
        selected = false;
        for (var j in $scope.events) {
            var p = $scope.events[j];
            for (var i in $scope.useType) {
                if ($scope.useType[i]) {
                    selected = true;
                    if (i == p.type) {
                        filterAfterType.push(p);
                        break;
                    }
                }
            }        
        }
        if (!selected) {
            filterAfterType = $scope.events;
        }

        $scope.stateGroup = uniqueItems(filterAfterType, 'state');
        var filterAfterState = [];        
        selected = false;
        for (var j in filterAfterType) {
            var p = filterAfterType[j];
            for (var i in $scope.useState) {
                if ($scope.useState[i]) {
                    selected = true;
                    if (i == p.state) {
                        filterAfterState.push(p);
                        break;
                    }
                }
            }       
        }
        if (!selected) {
            filterAfterState = filterAfterType;
        }  

        
        $scope.cityGroup = uniqueItems(filterAfterState, 'city');
        var filterAfterCity = [];        
        selected = false;
        for (var j in filterAfterState) {
            var p = filterAfterState[j];
            for (var i in $scope.useCity) {
                if ($scope.useCity[i]) {
                    selected = true;
                    if (i == p.city) {
                        filterAfterCity.push(p);
                        break;
                    }
                }
            }    
        }
        if (!selected) {
            filterAfterCity = filterAfterState;
        }        

          $scope.filteredEvents = filterAfterCity;    
    }, true);
    
    
    $scope.$watch('filtered', function (newValue) {
        if (angular.isArray(newValue)) {
            console.log(newValue.length);
        }
    }, true); 

     $scope.itemsLimit = function() {
        return pageSize * pagesShown;
    };
    $scope.hasMoreItemsToShow = function() {
        return pagesShown < ($scope.events.length / pageSize);
    };
    $scope.showMoreItems = function() {
        pagesShown = pagesShown + 1;         
    };
    

}).filter('count', function() {
    return function(collection, key) {
      var out = "test";
      for (var i = 0; i < collection.length; i++) {
          //console.log(collection[i].pants);
          //var out = myApp.filter('filter')(collection[i].pants, "42", true);
      }
      return out;
    }
}).filter('groupBy',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems(collection, key);
        };
    });