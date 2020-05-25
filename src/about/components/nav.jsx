import React ,{ Component } from "react";
import {Link} from "react-router-dom";


class NavBar extends Component{
    render(){
        return(
            
            <nav className="navbar nav-bar navbar-inverse navbar-fixed-top">
                    <div className="navbar-header">
                    <button type="button" class="navbar-toggle toggle" data-toggle="collapse" data-target="#navbar-content" >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                    </div>
                   
                   <div className="collapse navbar-collapse" id="navbar-content">
                    <ul className="nav navbar-nav" >
                        <li className="nav-item" >
                            <Link to="/">Profile</Link></li>
                        <li className="nav-item">
                            <Link to="/resume">Resume</Link></li>
                        <li className="nav-item">
                            <a href="https://github.com/shengliu02">Github</a></li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/shengliu02/">LinkedIn</a></li>
                        {/* <li className="nav-item">
                            <Link to="/msgboard">Comments</Link></li> */}
                    </ul>

                    </div>
                    
            </nav>
           
        )
    }
}

export default NavBar;