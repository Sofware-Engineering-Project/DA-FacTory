const express = require('express');
const router = express.Router();
const User = require("../models/User")
const FacultyResearchProject = require("../models/FacultyResearchProject")
router.use(express.urlencoded({extended: true}));
router.use(express.json())
/*  title: "",
    description:"",
    req_no_student:0,
    criteria:"",
    faculty: "",
    tags: [],  
    project_status:"", */
router.post("/addproject",async (req,res)=>{
  
   console.log(req.body);
   const {project_title,description,require_of_student,topic_tags,criteria,project_status,faculty_id } = req.body;
  
   const _project = new FacultyResearchProject.Faculty_projects({
    project_title,description,require_of_student,topic_tags,criteria,project_status,faculty_id 
   });
    await _project.save(async (err)=>{
      if(err)
      console.log(err);
      else
      {
        res.send({success:true})
        console.log("Project Created successfully");
      }
    })


})


router.post("/register", async (req, res) => {
  console.log(req.body);
  const { email, password, profession } = req.body;
  User.LoginCredential.findOne({email:email}, async (err,user) => {
    if(user){
      res.send({message: "User already registered"});
    }
    else{
      const user = new User.LoginCredential({
        email,
        password,
        profession,
      });
      await user.save(async (err) => {
        if (err) {
          //res.send(err);
          console.log(err);
        } else {
          res.send({message: "Successfully Registered..."});
          console.log("Successfully Registered...");
          if (profession == "Student") {
            const { firstname, middlename, lastname, gender, contact } = req.body;
            const student = new User.Student({
              user: {
                email,
                firstname,
                middlename,
                lastname,
                contact,
                gender,
              },
            });
            await student.save((err) => {
              if (err) {
                //res.send(err);
                console.log(err);
              } else {
                //res.send("Student Profile Created...");
                //console.log(student.user.login_credentials);
                console.log("Student Profile Created...");
              }
            });
          } else {
            const { firstname, middlename, lastname, gender, contact } = req.body;
            const faculty = new User.Faculty({
              user: {
                email,
                firstname,
                middlename,
                lastname,
                contact,
                gender,
              },
            });
            await faculty.save((err) => {
              if (err) {
                //res.send(err);
                console.log(err);
              } else {
                //res.send("Student Profile Created...");
                //console.log(student.user.login_credentials);
                console.log("Faculty Profile Created...");
              }
            });
          }
        }
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { email, password, profession } = req.body;
  User.LoginCredential.findOne({email:email},(err,user) => {
    if(user){
      console.log(user,req.body);
      if(password==user.password && profession==user.profession)
      {
        res.send({message:"Login Successfull",user: user});
      }
      else{
        res.send({message: "Invalid credentials"});
      }
    }else{
      res.send({message: "User not registered"});
    }
  });
});

router.get("/fetchFaculty", (req,res) => {
  User.Faculty.find({},(err,faculties) => {
    if(faculties){
      res.send(faculties);
    }else{
      console.log("Error occured while fetching faculty profiles from database...");
      res.send({error:1});
    }
  });;
});

router.get("/fetchStudent", (req,res) => {
  User.Student.find({},(err,students) => {
    if(students){
      res.send(students);
    }else{
      console.log("Error occured while fetching student profiles from database...");
      res.send({error:1});
    }
  });;
});


router.get("/fetchProjects", (req,res) => {
  FacultyResearchProject.Faculty_projects.find({},(err,projects) => {
    
    if(projects){
     
      res.send(projects);
    }else{
      console.log("Error occured while fetching projects from database...");
      res.send({error:1});
    }
  });;
});



module.exports = router;