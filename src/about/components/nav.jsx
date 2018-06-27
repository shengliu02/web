import React ,{ Component } from "react";

class NavBar extends Component{
    render(){
        return(
            <div>
            <nav className="navbar nav-bar navbar-inverse navbar-fixed-top">

                    <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav" >
                        <li className="nav-item" >
                            <a className="nav-link" href="#">Main </a></li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a></li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a></li>

                    </ul>
                    </div>
            </nav>
            </div>
        )
    }
}

export default NavBar;