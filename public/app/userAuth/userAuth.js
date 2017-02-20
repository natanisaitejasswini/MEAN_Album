angular.module('album').factory('authService',function($resource){
var UserResource = $resource('/api/users/:id',{_id:"@id"},{
update : {method : 'PUT', isArray:false }
}); //API
//User Resource to find User Role
UserResource.prototype.isAdmin = function(){
    return this.role && this.roles.indexOf('admin') > -1;
}

return UserResource;
})