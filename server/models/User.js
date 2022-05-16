const  mongoose  = require('mongoose');

const logincredentialSchema = new mongoose.Schema({
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

const UserProfileSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: [true, 'Email is required'],
        unique: true,
        // maxlength: [128, 'Email can\'t be greater than 128 characters'],
        // index: true
    },
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
    }
})

const Project = new mongoose.Schema({
    project_details:{
        type: String,
        required:false
    },
    status: {
        type: String,
        required: false
    }
})

const StudentProfile = new mongoose.Schema({
    user: UserProfileSchema,
    batch: {
        type:Number,
        required: false
    },
    semester: {
        type:Number,
        required: false
    },
    cpi: {
        type:Number,
        required: false
    },
    resume: {
        type: Object,
        required: false
    },
    projects: {
        type: [Project],
        required: false
    }
});

const FacultyProfile = new mongoose.Schema({
    user: UserProfileSchema,
    yearOfJoining: {
        type:Number,
        required: false
    },
    areaOfResearch: {
        type:String,
        required: false
    },
    courses: {
        type:[Number],
        required: false
    },
    achievements: {
        type: String,
        required: false
    },
    studentUnderRPS: {
        type: Number,
        requiredPaths: false
    },
    officeAddress: {
        type: String,
        required: false
    },
    projects: {
        type: [Project],
        required: false
    }
});

const LoginCredential = mongoose.model('LOGINCREDENTIAL',logincredentialSchema);
const Student = mongoose.model("STUDENT",StudentProfile);
const Faculty = mongoose.model("FACULTY",FacultyProfile);
module.exports = { LoginCredential, Student, Faculty };