import React from "react";
import Grid from "./Grid";
import NoImage from "./images/default.jpg";
//import { useFacultyProfileFetch } from "./hooks/useFacultyProfileFetch";
import Faculty from "./Faculty";
import { useState, useEffect } from "react";

const initialState = [{
  user: {
    email: "",
    firstname: "",
    lastname: "",
    contact: 0,
    gender: "",
  },
  courses: [],
  projects: [],
}];

const FacultyList = () => {
  const [state, setState] = useState(initialState);
  //const [error, setError] = useState(false);

  // we can also define fetchMovie function inside useEffect Hook
  // without using useCallback to stop infinite loop rendering.
    useEffect(() => {
      (async () => {
        const profiles = await (
          await fetch("http://localhost:5000/DA-Factory/fetchFaculty")
        ).json();
        //console.log(profiles);
        setState(profiles);
      })();
      //setState(initialState);
      //fetchProfiles();
    }, []);
  //console.log(state);

  //if (error) return <div>Something went wrong...</div>;

  return (
    <Grid>
      {state.map((profile) => (
        <Faculty
          key={profile.user.email}
          firstname={profile.user.firstname}
          lastname={profile.user.lastname}
          image={profile.user.profile_picture ? profile.profile_picture : NoImage}
          email={profile.user.email}
          contact={profile.user.contact}
          projectCount={profile.projects.length}
        />
      ))}
    </Grid>
  );
};

export default FacultyList;
