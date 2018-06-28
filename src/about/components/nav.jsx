import React ,{ Component } from "react";
import {Link} from "react-router-dom";

class NavBar extends Component{
    render(){
        return(
            <div>
            <nav className="navbar nav-bar navbar-inverse navbar-fixed-top">

                    <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav" >
                        <li className="nav-item" >
                            <Link to="/">Main</Link></li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a></li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a></li>
                        <li className="nav-item">
                            <Link to="/blog">Blog</Link></li>

                    </ul>
                    </div>
            </nav>
            </div>
        )
    }
}

export default NavBar;