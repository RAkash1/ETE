import React from "react";
import MyComponent from "./maps";
import './contact.css'
const Contact=()=>{
    return(
        <>
        <main>
        <div className="cont contpg">
            <h2>Contact Information</h2>
            <p>Address: </p>
            <p>Phone: +91 797-358-5105</p>
            <p>Email: akash0816.be20@chitkara.edu.in</p>
            <p>Website: Myworld.com</p>
        </div>
        
        <div className="contf contpg">
        <div>Do you have any questions?</div>
        <input className="contin" type="text" placeholder="Name"/>
        <input className="contin" type="email" placeholder="Email"/>
        <input className="contin" type="text" placeholder="Subject"/>
        <input className="contin" type="text" placeholder="Message"/>
        <button className="contbtn">Submit</button>
        </div>
         <div className="map">
            <MyComponent/>
        </div> 
        </main>
        </>
    );
}
export default Contact;