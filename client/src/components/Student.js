import React from "react";
import PropTypes from "prop-types";
import "./Student.css";

const Student = ({image, firstname, lastname, email, contact, projectCount}) => {
    return (
        <div className="container mt-5 mb-5 d-flex">
    <div className="card p-3 w-100">
        <div className="d-flex align-items-center">
            <div className="image"> <img src={image} className="rounded" alt="profile_picture" width="155" /> </div>
            <div className="ml-3 w-100">
                <h4 className="mb-0 mt-0">{firstname} {lastname}</h4> <span className="text-info">{email}</span>
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    
                    <div className="d-flex flex-column align-items-center"> <span className="rating">Projects</span> <span className="number1 d-flex justify-content-center">{projectCount}</span> </div>
                    
                    <div className="d-flex flex-column align-items-center"> <span className="rating">Area Of Interest</span> <span className="number2 d-flex justify-content-center">Cryptography</span> </div>
                    
                    <div className="d-flex flex-column align-items-center"> <span className="rating">Contact</span> <span className="number3 d-flex justify-content-center">{contact}</span> </div>
                </div>
                <div className="button mt-2 d-flex flex-row align-items-center justify-content-center">  <button className="btn btn-sm btn-primary w-20 ml-2">View Profile</button> </div>
            </div>
        </div>
    </div>
</div>
    );
}

Student.propTypes = {
    image: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    contact: PropTypes.number,
};

export default Student;