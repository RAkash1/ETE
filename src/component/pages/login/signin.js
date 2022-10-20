import React from "react";
import { Link } from "react-router-dom";
import './sign.css';
const signin=()=>{
    return(
        <div className="sign signc">
            <h1>SIGN IN</h1>
            <form className="form signc">
                <input
                type="email"
                name="email"
                placeholder="Email"
                className="inp signf"
                />
                <input
                type="password"
                name="password"
                placeholder="Password"
                className="inp signf"
                />
                <button className="signbtn signf">SUBMIT</button>
                <div ><Link className="linkto" to="/signup">if don't have a account ?</Link></div>
            </form>
        </div>
    );
}
export default signin;