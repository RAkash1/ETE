import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const home=()=>{
    return(
        <div>
        <div className="main">
            <h1>NO<span>PAIN</span> NO <span>GAIN</span></h1>
            <p>Having a perfect body requires a lot of training. Nice-looking body and powerful organism are interconnected – and we can help you with both.</p>
        </div>
        <div className="main2">
            <div className="sub1">
            <p className="h2">Welcome</p>
            <p>Welcome to the website Intense Gym! We hope that you will appreciate our services and opportunities we offer our loyal and potential customers. Here are some of them:</p>
            </div>
            <div className="sub">
                <div className="subdiv">
                    <div className="logosub"></div> 
                    <h2>Qualified Coaches</h2>
                    <p>Our coaches have years of experience in various types of fitness and sports.</p>
                </div>
                <div className="subdiv">
                    <div className="logosub"></div>
                    <h2>Individual Approach</h2>
                    <p>Every client of Intense has a personalized program of training and nutrition.</p>
                </div>
                <div className="subdiv">
                    <div className="logosub"></div>
                    <h2>Modern Fitness Equipment</h2>
                    <p>We cooperate with leading fitness equipment suppliers to give you the superior results.</p>
                </div>
            </div>
            <Link to="/post"className="photo">UPLOAD PHOTO</Link>
        </div>
        </div>
    );
}
export default home;