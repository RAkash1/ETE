import React, { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import "./sign.css"

const Signup = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "" 
  });

  const { name, email, password} = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if(user.name!=""&&user.email!=""&&user.password!=""){await axios.post("http://localhost:3003/users", user);
    navigate("/admin");}
    else{
      alert("no value");
    }

  };
    return(
        <div className="sign signc">
            <h1>SIGN UP</h1>
            <form className="form signc" onSubmit={e => onSubmit(e)}>
                <input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                className="inp signf"
                onChange={e => onInputChange(e)}
                />
                <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                className="inp signf"
                onChange={e => onInputChange(e)}
                />
                <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                className="inp signf"
                onChange={e => onInputChange(e)}
                />
                <button className="signbtn signf">SUBMIT</button>
            <div ><Link className="linkto" to="/signin">if have a account ?</Link></div>

            </form>
        </div>
    );
}
export default Signup;