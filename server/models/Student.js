const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose');
const { UserProfileSchema } = require('./User');

const StudentProfile = new mongoose.Schema({
    userdetails: UserProfileSchema,
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
});

const Student = mongoose.model("STUDENT",StudentProfile);
module.exports={Student};

