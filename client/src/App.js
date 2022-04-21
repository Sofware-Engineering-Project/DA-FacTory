import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import FacultyList from "./components/FacultyList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/student" element={<StudentList />} />
        <Route exact path="/faculty" element={<FacultyList />} />
      </Routes>
    </Router>
  );
}

export default App;
