
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
angular.module('album').controller('courseCtrl', function($scope,courseCached){
    var pagesShown = 1;
    var pageSize = 5;
 $scope.courses = courseCached.query();
   $scope.itemsLimit = function() {
        return pageSize * pagesShown;
    };
    $scope.hasMoreItemsToShow = function() {
        return pagesShown < ($scope.courses.length / pageSize);
    };
    $scope.showMoreItems = function() {
        pagesShown = pagesShown + 1;         
    };

//Sort Course by Name or Level
    $scope.sortOptions = [{value:"name",text: "Sort by Name"},
        {value: "category",text: "Sort by Category"}];
    $scope.sortOrder = $scope.sortOptions[0].value;

  $scope.selected = [];
  $scope.selectedLevel = [];
  
     // whole places
     $scope.categorys = [];
     $scope.levels = [];
     
     // when user clicks on checkbox, change selected list
     $scope.toggle = function (item, list) {
       var idx = list.indexOf(item);
       if (idx > -1) list.splice(idx, 1);
       else list.push(item);
     };
     
     // is item exists in list
     $scope.exists = function (levelsItem, list) {
       return list.indexOf(levelsItem) > -1;
     };

         $scope.toggle = function (levelsItem, list) {
       var idx = list.indexOf(levelsItem);
       if (idx > -1) list.splice(idx, 1);
       else list.push(levelsItem);
     };
     
     // is item exists in list
     $scope.exists = function (levelsItem, list) {
    
       return list.indexOf(levelsItem) > -1;
     };
     
     // process user data and prepare whole places
    
       angular.forEach($scope.courses, function(courses, key) {
        if($scope.categorys.indexOf(courses.category) == -1) {
            $scope.categorys.push(courses.category);
        }     
     });
      angular.forEach($scope.courses, function(courses, key) {
        if($scope.levels.indexOf(courses.level) == -1) {
            $scope.levels.push(courses.level);
        }     
     });
    
}).filter('selectedTags', function() {
    // filter to check array of elements
    return function(courses, tags) {
        return courses.filter(function(courses) {
            if (tags.indexOf(courses.category) != -1) {
                return true;
            } else if(tags.length == 0) {
                return true;
            }
            return false;

        });
    };
}).filter('selectedLevelTags', function() {
    // filter to check array of elements
    return function(courses, levelTags) {
        return courses.filter(function(courses) {
            if (levelTags.indexOf(courses.level) != -1) {
                return true;
            } else if(levelTags.length == 0) {
                return true;
            }
            return false;

        });
    };
});

var Accordion = function() {
  $(document).on('click', '.accordion__head', function() {
    var parent = $(this).parent();
    if (parent.hasClass('is-active')) {
      parent.removeClass('is-active');
    } else {
      $('.app__accordion').removeClass('is-active');
      parent.addClass('is-active');
    }
  });
};


Accordion();
