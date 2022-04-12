const mongooose = require('mongoose')

const UserNameSchema = new mongooose.Schema({
    first_name:{
        type: String,
        required:true
    },
    middle_name:{
        type:String,
    },
    last_name:{
        type:String,
        required:true
    }
})

const UserSchema = new mongooose.Schema({
    user_name:[UserNameSchema],
    contact:{
        type:long,
        required:true
    },
    birthdate:{
        type:Date,
        required:true
    },
    gender:{
        type:String
    },
    profile_picture:{
        type:Object,
        required:true
    },
    profile_description:{
        type:String,
        required:true
    }

})

const User = mongooose.model('USER',UserSchema);
module.exports = User;