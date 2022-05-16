const { mongoose } = require('mongoose');

const {Faculty} = require("./User");
/*project_title,description,require_of_student,topic_tags,criteria,project_status,faculty_id */
const FRSproject = new mongoose.Schema({
    project_title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    require_of_student:{
        type:Number,
        required:false
    },
    topic_tags:{
        type:[String],
        required:true
    },
    criteria:{
        type:String,
        required:false
    },
    project_status:{
        type:String,
        required:true
    },
    faculty_id :{
        // type:mongoose.Schema.Types.ObjectId,ref:'Faculty'
        type:String,
        required:true
    }
})
const Faculty_projects = mongoose.model("Faculty_research_project",FRSproject);
module.exports={Faculty_projects};