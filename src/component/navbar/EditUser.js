import React, { useState } from "react";
import axios from 'axios'
import { useNavigate ,useParams} from "react-router-dom";
import "../pages/login/sign.css"

const EditUser
 = () => {
  let navigate = useNavigate();
  const {id}=useParams();
  alert(id)
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
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users}`);
    setUser(result.data);
  };
    return(
        <div className="sign signc">
            <h1>Edit User</h1>
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

            </form>
        </div>
    );
}
export default EditUser
;