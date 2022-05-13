import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import FacultyList from "./components/FacultyList";
import ProjectList from "./components/ProjectList";
import { useState } from "react";

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Navbar LoggedIn={LoggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/auth" element={<Auth LoggedIn={LoggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route exact path="/student" element={<StudentList />} />
        <Route exact path="/faculty" element={<FacultyList />} />
        <Route exact path="/projects" element={<ProjectList />} />
      </Routes>
    </Router>
  );
}

export default App;
