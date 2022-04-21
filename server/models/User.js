const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose');

const logincredentialSchema = new mongooose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: [true, 'Email is required'],
        unique: true,
        // maxlength: [128, 'Email can\'t be greater than 128 characters'],
        // index: true
      },
      password: {
        type: String,
        required: [true, 'Password is required']
      },
      profession: {
          type: String,
          required: [true, 'Profession is required']
      }
})

const UserProfileSchema = new mongooose.Schema({

    firstname:{
        type: String,
        required:true
    },
    middlename:{
        type:String,
    },
    lastname:{
        type:String,
        required:true
    },
    contact:{
        type: Number,
        required:true,
        length: 10,
    },
    birthdate:{
        type:Date,
        required:false
    },
    gender:{
        type:String
    },
    profile_picture:{
        type:Object,
        required:false
    },
    profile_description:{
        type:String,
        required:false
    },
    credentials:[logincredentialSchema]
})


const UserProfile = mongooose.model('UESRPROFILE',UserProfileSchema);
const LoginCredential = mongooose.model('LOGINCREDENTIAL',logincredentialSchema);
module.exports = {LoginCredential,UserProfile};