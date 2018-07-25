import React ,{ Component } from "react";
import {Link} from "react-router-dom";


class NavBar extends Component{
    render(){
        return(
            
            <nav className="navbar nav-bar navbar-inverse navbar-fixed-top">

                    <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav" >
                        <li className="nav-item" >
                            <Link to="/">Profile</Link></li>
                        <li className="nav-item">
                            <Link to="/blog">Blog</Link></li>
                        <li className="nav-item">
                            <Link to="/msgboard">Comments</Link></li>
                    </ul>
                    </div>
            </nav>
           
        )
    }
}

export default NavBar;