import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";
const navbar=()=>{
    return(
        <nav className="nav">
        <div>
            <Link className="navlink logo" to="/">
                MY <span className="logw">WORLD</span>
            </Link>
        </div>
        <ul>
            <li><Link className="navlink" exact to="/">Home</Link></li>
            <li><Link className="navlink"exact to="/about">About</Link></li>
            <li><Link className="navlink" exact to="/contact">Contact</Link></li>
            <li><Link className="navlink sinlogo" to="/signin">Sign in</Link></li>
        </ul>
    </nav>
    );
}
export default navbar;
