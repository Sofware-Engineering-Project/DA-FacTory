import axios from "axios";
import React from "react";
import avtar from "../components/images/default.jpg"
import "./About.css"

const About = () => {
    // const User = JSON.parse(localStorage.getItem("User"));
    // console.log("Profile",User);
    // axios.get("http://localhost:5000/DA-Factory/profile",User).then(res => {
    //     alert(res.data.message);
    //     const profile = res.data.user;
    //     console.log(profile);
    // }) ; 


    return (
        <div class="services-section">
        <div class="inner-width">
        <h1 class="section-title">About Us</h1>
        <br></br>
        <br></br>
        <h3 class = "about">We are a team of young developers passionate of building real-time applications for greater good and convenient use.
            <br></br>
            <br></br>
            DA-Factory is a similar representation of our aim to build an online platform connecting the faculties with the students in real time and convenience.
        </h3>
        <div class="border"></div>
        <div class="services-container">

          <div class="service-box">
            <div class="service-icon">
               
            </div>
            <div class="service-title">Ajaysinh Rajput</div>
            <div class="service-desc">
              
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
               
            </div>
            <div class="service-title">Charvi Zala</div>
            <div class="service-desc">
             
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
               
            </div>
            <div class="service-title">Paavan Parekh</div>
            <div class="service-desc">
           
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
               
            </div>
            <div class="service-title">Param Parekh</div>
            <div class="service-desc">
              
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
               
            </div>
            <div class="service-title">Swescha Rambal</div>
            <div class="service-desc">
              
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
               
            </div>
            <div class="service-title">Jainam Gandhi</div>
            <div class="service-desc">
             
            </div>
          </div>
        </div>
      </div>
    </div>



            )
}

export default About;