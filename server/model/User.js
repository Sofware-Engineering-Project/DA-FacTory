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
const logincredentialSchema = new mongooose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: [true, 'Email is required'],
        // maxlength: [128, 'Email can\'t be greater than 128 characters'],
        // index: true
      },
      password: {
        type: String,
        required: [true, 'Password is required']
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
    },
    login_credentail:[logincredentialSchema]

})

const User = mongooose.model('USER',UserSchema);
module.exports = User;