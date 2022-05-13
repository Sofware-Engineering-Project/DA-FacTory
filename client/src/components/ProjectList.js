import React from "react";
import Grid from "./Grid";
import Project from "./Project";
import { useState, useEffect } from "react";

const initialState = [{
    project_title: "",
    description:"",
    require_of_student:0,
    topic_tags:[],
    criteria: "",
    project_status: "",  
    faculty_id:"",
}];

const ProjectList = () => {
  const [state, setState] = useState(initialState);
  //const [error, setError] = useState(false);

  // we can also define fetchMovie function inside useEffect Hook
  // without using useCallback to stop infinite loop rendering.
    useEffect(() => {
      (async () => {
        const projects = await (
          await fetch("http://localhost:5000/DA-Factory/fetchProjects")
        ).json();
        
        setState(projects);
      })();
      //setState(initialState);
      //fetchprojectss();
    }, [state]);
  
     
  //if (error) return <div>Something went wrong...</div>;

  return (
    <Grid>
      {state.map((_Project) => (
        <Project
          title={_Project.project_title}
          faculty={_Project.faculty_id}
          tags={_Project.topic_tags}
          status={_Project.project_status}
          require_of_student={_Project.require_of_student}
          description={_Project.description}
          criteria={_Project.criteria}

        />
      ))}
    </Grid>
  );
};

export default ProjectList;
