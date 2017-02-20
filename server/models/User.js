var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = new mongoose.Schema({
    firstName: {type:String, required:'{PATH} is required!'},
    lastName:{type:String, required:'{PATH} is required!'},
    username:{
        type:String,
        required:'{PATH} is Required !',
        unique : true  //Creates Uniq index
    },
    salt:{type:String, required:'{PATH} is required!'},
    hashed_pwd: {type:String, required:'{PATH} is required!'},
    roles : [String]
});
userSchema.methods = {
    authenticate: function (passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole : function (role) {
        return this.roles.indexOf(role) > -1;
    }
};

var User = mongoose.model('user',userSchema);
function createDefaultUsers(){
User.find({}).exec(function(err, collection){
    if(collection.length === 0){
        var salt,hash;
        salt = encrypt.createSalt ();
        hash = encrypt.hashPwd(salt, 'karthik@12');
        User.create ({'firstName':'Karthik', 'lastName':'nathani','username':'karthik@12', 'salt' : salt, 'hashed_pwd': hash, 'roles':['admin']});
        salt = encrypt.createSalt ();
        hash = encrypt.hashPwd(salt,'sai@12');
        User.create ({'firstName':'sai Tejaswini', 'lastName':'nathani','username':'sai@12', 'salt' : salt, 'hashed_pwd': hash,'roles':['']});
         salt = encrypt.createSalt ();
        hash = encrypt.hashPwd(salt,'123');
        User.create ({'firstName':'Test', 'lastName':'ID','username':'test@17', 'salt' : salt, 'hashed_pwd': hash,'roles':['']})
    }
})
};
exports.createDefaultUsers = createDefaultUsers;
