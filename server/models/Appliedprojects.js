const { mongoose } = require('mongoose');
const Student = require("./Student");
const FRSproject = require("./Facultyresearchproject")

const applied_project = new mongoose.Schema({
   
    project_status:{
        type:String,
        required:true
    },
    frs_id :{
        type:mongoose.Schema.Types.ObjectId,ref:'FRSproject'
    },
    student_id:{
        type:mongoose.Schema.Types.ObjectId,ref:'Student'
    }
})
const appliedproject = mongoose.model("Applied_project",applied_project);
module.exports={appliedproject};