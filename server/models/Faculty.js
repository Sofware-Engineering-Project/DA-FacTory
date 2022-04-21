const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose');
const User = require('./User');

const FacultyProfile = new mongoose.Schema({
    userdetails: User.UserProfile,
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
    
});

const Faculty = mongoose.model("FACULTY",FacultyProfile);
module.exports={Faculty};