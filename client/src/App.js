import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import StudentList from "./components/StudentList";
import FacultyList from "./components/FacultyList";
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import { useState,useEffect } from "react";

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(JSON.parse(localStorage.getItem("LoggedIn")));
  },[]);

  return (
    <Router>
      <Navbar LoggedIn={LoggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/student" element={<StudentList />} />
        <Route exact path="/faculty" element={<FacultyList />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/projects" element={<ProjectList LoggedIn={LoggedIn} setLoggedIn={setLoggedIn}/>} />
      </Routes>
    </Router>
  );
}

export default App;
