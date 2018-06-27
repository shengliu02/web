import React, { Component } from "react";
import '../styles/blogs.css';

class LeftNavBar extends Component {

    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-left">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-content" aria-expanded="false" aria-controls="navbar-content">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <p className="navbar-brand">Sheng's Blog</p>
                    </div>

                    <div id="navbar-content" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><a  href="#">Thailand Trip Feb. 2018</a></li>
                            <li><a  href="#">My Very First Blog</a></li>
                            <li><a  href="#">What's Next? Guess What?</a></li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}

export default LeftNavBar