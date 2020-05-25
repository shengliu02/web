import React, { Component } from "react";
class About extends Component{

    constructor(props){
        super(props);
        this.state = {
            visibility : 'visible',
            intervalId : 0,
        }
    }

    componentDidMount(){
        let intervalId = setInterval( () => {
            if(this.state.visibility === 'visible'){
                this.setState({visibility : 'invisible'})
            } else{
                this.setState({visibility : 'visible'})
            }

        },1000);
        this.setState({intervalId : intervalId});
    }

    componentWillUnmount(){

        clearInterval(this.state.intervalId);
        
    }



    render(){

        return(

            <div>

            {/* //     <div className="container-fluid-self background-container parallax-visual" >
            //         <div className = "profileIMG-circle" alt="Sheng Liu"/>
            //         <br/>

            //         <div className="display">

            //             <h3 className="display-h"><span className={this.state.visibility}>_</span> Hello, my name is Sheng.</h3>
            //         </div>
            //             <br/>
            //             <h3 >" It's not at all important to get it right the first time. It's vitally important to get it right the last time "</h3>
            //             <br/>
            //             <h3>by - Andrew Hunt and David Thomasaa</h3>

            //         <br/>
            //         <br/>
            //         <div className="s-buttons center">
            //             <a className="btn-primary-white" href="./resume">Resume</a>
            //         </div>

            //     </div> */}


        <div className="container">
            <div className="container-fluid-self body-bg parallax-visual" id="resume">
                <div className="div-row ">
                    <div className = "profileIMG-circle" alt="Sheng Liu"/>
                </div>
                <br/>
                <br/>
                <div className="div-row div-education">
                        <div className="div-column div-left">
                            <h2>Education</h2>
                        </div>

                        <div className="div-column div-right ">

                            <h4 className="div-title">Bachelor of Computer Science</h4>
                            <p >Brooklyn College, The City University Of New York, New York, NY, Anticipated Diploma: Fall 2019</p>

                        </div>


                </div>

                    <br/>
                    <br/>

                <div className="div-row div-skills">

                        <div className="div-column div-left">
                            <h2>Technologies</h2>
                        </div>

                        <div className="div-column div-right">
                                <h4 className="div-title">Familiar Language and Framework:</h4>
                                <ul className="div-techlist">
                                <li className="tech-item">Java</li>
                                <li className="tech-item">JavaScript</li>
                                <li className="tech-item">React</li>
                                <li className="tech-item">Node.js</li>
                                <li className="tech-item">Spring Boot</li>
                                <li className="tech-item">Karma</li>
                                <li className="tech-item">Jasmine</li>
                                <li className="tech-item">HTML</li>
                                <li className="tech-item">CSS</li>
                                <li className="tech-item">PostgreSQL</li>
                                <li className="tech-item">Squalize.js</li>
                                <li className="tech-item">Python</li>
                                <li className="tech-item">Unix Bash Script</li>
                                <li className="tech-item">Agile Methodology</li>
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
                            <h2>Relative Experience</h2>
                        </div>

                            <br/><br/>

                        <div className="div-column div-right">
                            <i><h4 className="div-title">Software Engineer Intern</h4></i>
                            <h5>JP Morgan Chase & Co., Houston, TX, June 2019 - August 2019</h5>
                            <p className="job-description">
                                Designed and developed efficient and maintainable data model verification engine microservices.
                                Built a full-stack automation system; increased efficiency of teams across JP Morgan by no less than 10% per week.
                                Participated in writing unit tests with J-Unit, Karma, and Jasmine.
                                Involved in developing reusable UI components using Angular, Boostrap, and Typescript.
                                Experienced in application deployment to GAIA cloud to provide a large computing capacity.
                                Utilized Hadoop, Spark, and Kafka for distributed data streaming and processing.

                            </p>
                        </div>

                        <br/><br/>
                        
                        <div className="div-column div-right">
                            <i><h4 className="div-title">Software Engineer Participant</h4></i>
                            <h5>CUNY Tech. Prep, New York, NY, August 2018 - May 2019</h5>
                            <p className="job-description">

                                Participate in university wide JavaScript training program, as one of 122 students out of over 400 applicants.
                                Earn full stack technologies such as React, Node, Express, and PostgreSQL as well as industry best practices
                                for design, implementation, and deployment such as MVC, version control with Git/GitHub, Agile/Scrum with Trello
                                and Slack, test driven development, and CI/CD.

                            </p>
                        </div>


                            <br/><br/>

                        <div className="div-column div-right">
                            <i><h4 className="div-title">IT Intern</h4></i>
                            <h5>NYC Department of Education, New York, NY, August 2018 - May 2019</h5>
                            <p className="job-description">
                            Maintain NYC public school server, network, software, and hardware devices to be used in maximize efficiency.
                            Troubleshoot hardware and software technical problems in a timely and accurate manner.
                            Deploy Window and MAC OS images with MDT and Apple Server remotely.


                            </p>
                        </div>


                            <br/><br/>
                        <div className="div-column div-right">
                            <i><h4 className="div-title">Data Analyst, Peer Mentor</h4></i>
                            <h5>Borough of Manhattan Community College, New York, NY, February 2016 - June 2018</h5>
                            <p className="job-description">
                                Work in a group size of over 8 Data Analysts.
                                Constantly cooperate with leadership team to analyst over 80 mentors log data, and generate useful report by using statistical
                                method. Help mentees to increase self-confidence and self-esteem by evolving
                                campus programs and activities.

                            </p>

                            <br/><br/>

                            <i><h4 className="div-title">Computer Science Tutor</h4></i>
                            <h5>CUNY Research Foundation, New York, NY, February 2017 - June 2018</h5>
                            <p className="job-description">
                                Instruct middle school students on basic math and algorithm behind coding.
                                One-to-group tutoring mythology in HTML, CSS, Scratch, and Codester.com challenges. Cooperate host
                                teacher to analyst and discuss each student's academic performance, and suggestions to
                                create lesson plan.

                            </p>


                        </div>
                    </div>

                </div>
            </div>
        </div>

        )
    }
}

export default About
