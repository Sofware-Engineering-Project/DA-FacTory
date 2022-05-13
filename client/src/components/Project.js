import React from "react";
import PropTypes from "prop-types";
import "./Project.css";

const Project = ({title, faculty, tags, status, description, require_of_student, criteria}) => {
    //console.log(tags);
    return (
        <div className="container mt-5 mb-5 d-flex">
    <div className="card p-3 w-100">
        <div className="d-flex align-items-center">
            
            <div className="ml-3 w-100">
                <h4 className="mb-0 mt-0">{title}</h4> 
                {/* <span className="text-info">{email}</span> */}
                <div className="p-2 mt-2 bg-primary d-flex flex-column justify-content-between rounded text-white stats">
                    <div className="d-flex flex-row  align-items-baseline"> <span className="rating">Description</span> <span className="number3 d-flex justify-content-center">{description}</span> </div>
                   
                    <div className="d-flex flex-row align-items-baseline"> <span className="rating">Tags</span> <span className="number3 d-flex justify-content-center">{
                        tags.map(tag => (
                            <span key={tag}>{tag},&nbsp;</span>
                        ))
                    } </span> </div>
                    <div className="d-flex flex-row align-items-baseline"> <span className="rating">Faculty</span> <span className="number3 d-flex justify-content-center">{faculty}</span> </div>

                    <div className="d-flex flex-row align-items-baseline"> <span className="rating">Project Status</span> <span className="number3 d-flex justify-content-center">{status}</span> </div>

                    <div className="d-flex flex-row align-items-baseline"> <span className="rating">criteria</span> <span className="number3 d-flex justify-content-center">{criteria}</span> </div>
                   
                    <div className="d-flex flex-row align-items-baseline"> <span className="rating">required no. of students</span> <span className="number3 d-flex justify-content-center">{require_of_student}</span> </div>
                    
                </div>
                <div className="p-2 mt-2 bg-primary d-flex justify-content-around rounded text-white stats">
                <div className="button mt-2 d-flex flex-row align-items-center justify-content-center">  <button className="btn btn-sm btn-primary w-20 ml-2">Apply</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

Project.propTypes = {
    title: PropTypes.string,
    faculty: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    description:PropTypes.string,
    require_of_student:PropTypes.number,
    criteria: PropTypes.string
};

export default Project;