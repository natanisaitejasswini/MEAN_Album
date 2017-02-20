angular.module('album').service('exist',function(arr,value){
  var i =0;
  while(i<arr.length){
    if(arr[i] == null){
      return true;
    }
    if(arr[i] != value){
      i++;
    }
    else{
      return false;
    }
  }
  return true;

});