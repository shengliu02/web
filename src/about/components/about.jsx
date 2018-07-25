import React, { Component } from "react";
class About extends Component{

    constructor(props){
        super(props);
        this.state = {
            images:{
                sheng_img: require('../images/Sheng.png'),
            
            }
        }
    }

    render(){ 

        return(

            <div>
            <div className="container-fluid" >

                <div className="container-fluid-self" >
                    <img className = "profileIMG-circle" src={this.state.images.sheng_img} alt="Sheng Liu" />
                    <br/>
                    <h3>> Hello, I am Sheng Liu</h3>
                    <div className="head-content">
                        <br/>
                        <h5>" It's not at all important to get it right the first time. It's vitally important to get it right the last time "</h5>
                        <br/>
                        <h5>by - Andrew Hunt and David Thomas</h5>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>


            <div className="container-fluid-self body-bg" id="resume">
                <div className="div-row div-education">
                        <div className="div-column div-left">
                            <h2>Education</h2>
                        </div>

                        <div className="div-column div-right ">
                        
                            <h4 className="div-title">Bachelor of Computer Science</h4>
                            <p >Brooklyn College, The City University Of New York, New York, NY, Anticipated Diploma: May 2019</p>
                            <br/>
                            <h4 className="div-title">Associate of Computer Science</h4>
                            <p>Borough Manhattan of Community College, New York, NY, Auguest 2015 - May 2017</p>
                            <br/>

                        </div>

                    <br/>
                    <br/>
                    <br/>
                </div>

                <div className="div-row div-skills">

                        <div className="div-column div-left">
                            <h2>Technologies</h2>
                        </div>

                        <div className="div-column div-right">
                                <h4 className="div-title">Familiar Language and Framework:</h4>
                                <ul className="div-techlist">
                                <li className="tech-item">Java</li>
                                <li className="tech-item">Python</li>
                                <li className="tech-item">HTML</li>
                                <li className="tech-item">CSS</li>
                                <li className="tech-item">JavaScript</li>
                                <li className="tech-item">Unix Bash Script</li>
                                <li className="tech-item">MASM Assembly language</li>
                                <li className="tech-item">Agile Methodology</li>
                                <li className="tech-item">React</li>
                                <li className="tech-item">Node.js</li>
                                <li className="tech-item">NPM</li>
                                <li className="tech-item">Firebase</li>
                                <li className="tech-item">Bootstrap</li>

                                </ul>

                        
                        </div>

                    </div>
                    <br/>
                    <br/>
                    <br/>


                    <div className="div-row div-experience">
                        <div className="div-column div-left">
                            <h2>Work Experience</h2>
                        </div>

                        <div className="div-column div-right">
                            <i><h4 className="div-title">Data Analyst, Peer Mentor</h4></i>
                            <h5>Borough of Manhattan Community College,New York, NY, Feburary 2016 - Present</h5>
                            <p className="job-description"> 
                                Work in a group size of over 8 Data Analysts. 
                                Constantly coorperate with leadership team to analyst over 80 mentors log data, and generate useful report by using statistical
                                method. Help mentees to increase self-confidence and self-esteem by envolving
                                campus programs and activities. 

                            </p> 

                            <br/><br/>
                            
                            <i><h4 className="div-title">Computer Science Tutor</h4></i>
                            <h5>CUNY Research Foundation,New York, NY, Feburary 2017 - Present</h5>
                            <p className="job-description">
                                Instruct middle school students on basic math and algorithm behind coding.
                                One-to-group tutoring methology in HTML, CSS, Scratch, and Codester.com challenges. Cooperate host
                                teacher to analyst and discuss each student's academic performance, and suggestions to
                                create lesson plan.

                            </p>

                            <br/><br/>  

                            <i><h4 className="div-title">Registrar Assistant</h4></i>
                            <h5>Borough of Manhattan Community College,New York, NY, May 2017 - Auguest 2017</h5>
                            <p className="job-description">
                                Publicly presented with over 30 freshman students on the use of CUNY online services.
                                Worked one-to-one with student to troubleshoot registration hold and error. 

                            </p>

                            
                        
                        </div>
                    </div>

                </div>
    
        </div>

        )
    }
}

export default About