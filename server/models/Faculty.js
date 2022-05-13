const mongoose = require('mongoose');
const { UserProfileSchema } = require('./User');

const FacultyProfile = new mongoose.Schema({
    userdetails: UserProfileSchema,
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