import React, { Component } from "react";
import {Link} from "react-router-dom";
import '../styles/blogs.css';

class LeftNavBar extends Component {

    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-left">
                    <div className="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-content" >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <p className="navbar-brand">Sheng's Blog</p>
                    </div>

                    <div id="navbar-content" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Thailand Trip Feb. 2018</a></li>
                            <li><Link to="/" >Home Page</Link></li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}

export default LeftNavBar