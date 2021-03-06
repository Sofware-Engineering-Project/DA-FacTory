import axios from "axios";
import React from "react";
import avtar from "../components/images/default.jpg"
import "./Profile.css"

const Profile = () => {
    // const User = JSON.parse(localStorage.getItem("User"));
    // console.log("Profile",User);
    // axios.get("http://localhost:5000/DA-Factory/profile",User).then(res => {
    //     alert(res.data.message);
    //     const profile = res.data.user;
    //     console.log(profile);
    // }) ; 


    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Paavan Parekh</span></div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value="Paavan" /></div>
                            <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="Parekh" placeholder="surname" /></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value="9106199037" /></div>
                            <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value="201901067@daiict.ac.in" /></div>
                            <div className="col-md-12"><label className="labels">Area of Interests</label><input type="text" className="form-control" placeholder="education" value="Cryptography, Software Engineering" /></div>
                        </div>
                        
                        
                    </div>
                </div>
                {/* <div className="col-md-4">
                    <div className="p-3 py-5">
                        <button type="button" classNameName="btn btn-primary notify-button">Applications</button>
                    </div>
                </div> */}
            </div>
        </div>

            )
}

export default Profile;