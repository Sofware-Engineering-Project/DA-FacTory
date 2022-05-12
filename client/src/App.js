import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import StudentList from "./components/Studentlist/StudentList";
import FacultyList from "./components/Facultylist/FacultyList";
import Studentprofile from "./components/StudentProfile/studentprofile";
import { LogincredentialProvide } from "./Contexts/Logincontext";


function App() {
 
  return (
    <LogincredentialProvide>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/auth" element={<Auth/> } />
        <Route exact path="/student" element={<StudentList />} />
        <Route exact path="/faculty" element={<FacultyList />} />
        <Route exact path="/profile" element={<Studentprofile/>} />
      </Routes>
    </Router>
    </LogincredentialProvide>
  );
}

export default App;
