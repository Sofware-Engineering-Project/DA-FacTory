const { mongoose } = require('mongoose');
const Student = require("./Student");
const Faculty = require("./Faculty")

const proposed_project = new mongoose.Schema({
    project_title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    topic_tags:{
        type:[String],
        required:true
    },
    project_status:{
        type:String,
        required:true
    },
    faculty_id :{
        type:mongoose.Schema.Types.ObjectId,ref:'Faculty'
    },
    student_id:{
        type:mongoose.Schema.Types.ObjectId,ref:'Student'
    }
})
const proposedproject = mongoose.model("Proposed_project",proposed_project);
module.exports={proposedproject};