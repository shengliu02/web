import React, {Component} from 'react';
import firebaseApp from './firebase.js';
import * as firebase from 'firebase';
import './index.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            access_token:'',
            error: {
                message: ''
            },
            sheng_img: require('./images/Sheng.png'),
            github:require('./images/gh.svg'),
            email:require('./images/envelope.png')
            
        }


    }

    loadUserInfo(user){

        document.getElementById("login-bt").style.display = "none";
        document.getElementById("dropdown-bt").style.display = "block";
        document.getElementById("sign-out").style.display = "block";
        document.getElementById("log-suces").innerHTML = "Hi, " + user.displayName;
        document.getElementById("log-suces").style.display = "block";
        document.getElementById("profile-photo").src = user.photoURL;
        document.getElementById("profile-photo").style.display = "block";

    }

    isUserSignIn(){
        const user = firebaseApp.auth().currentUser;
    
        firebaseApp.auth().onAuthStateChanged(function(user) {
            if (user) {
    
                return true;
            }
            else {
                return false;
            }
         });
    }

    googleSignOut(){

        if(() => this.isUserSignIn()) {
            firebaseApp.auth().signOut().then(() => {
    
                document.getElementById("login-bt").style.display = "block";
                document.getElementById("dropdown-bt").style.display = "none";
                document.getElementById("sign-out").style.display = "none";
                document.getElementById("log-suces").style.display = "none";
                document.getElementById("profile-photo").style.display = "none";
    
            }).catch(function (error) {
                const errorMessage = error.message;
                this.setState = ({error : errorMessage});
            });
        } else{
            alert("You are not sign-in yet!");
    
        }

    }

    createUserWithGoogleEmail(){

        const provider = new firebase.auth.GoogleAuthProvider();
        firebaseApp.auth().signInWithPopup(provider).then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            this.setState = {access_token:token};
            // The signed-in user info.
            const user = result.user;
    
            if(user) {
    
                this.loadUserInfo(user);
            }
            // ...
        }).catch(error => {
            // Handle Errors here.
            //const errorCode = error.code;
            this.setState = ({error});
            /*// The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...*/
        });
    
    }

    
    render(){

        return(
        <div className="App-main">
            <div className="container-fluid" >
                <nav className="navbar nav-bar navbar-inverse navbar-fixed-top">
                    <div className="navbar-header">

                    </div>

                    <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav" >
                        <li className="nav-item" >
                            <a className="nav-link" href="#">Main </a></li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a></li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a></li>
                        {/*<li className="nav-item">
                            <a className="nav-link" href="#Forum">Forum</a></li>*
                                                    <li className="nav-item">
                            <a className="nav-link" href="#Goal">Goal</a></li>*/}
                    </ul>
                    </div>
                </nav>

                <div className="container-fluid-self">
                    <img className = "profileIMG-circle" src={this.state.sheng_img} alt="Sheng Liu" />
                    <br/>
                    <h2>> Hello, I am Sheng Liu</h2>
                    <div className="content">
                        <br/>
                        <h3>" It's not at all important to get it right the first time. It's vitally important to get it right the last time "</h3>
                        <br/>
                        <h3>by - Andrew Hunt and David Thomas</h3>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>


            <div className="container-fluid-self mission-bg" id="resume">
                <div className="div-row">
                    <div className="div-column div-education">
                        <div className="div-left">
                            <h2>Education</h2>
                        </div>

                        <div className="div-right ">
                        
                            <h4 className="div-title">Bachelor of Computer Science</h4>
                            <h5 >Brooklyn College, The City University Of New York, New York, NY, Anticipated Diploma: May 2019</h5>
                            <br/>
                            <h4 className="div-title">Associate of Computer Science</h4>
                            <h5 >Borough Manhattan of Community College, New York, NY, Auguest 2015 - May 2017</h5>
                            <br/>

                        </div>


                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>


                    <div className="div-column div-skills">
                        <div className="div-left">
                            <h2>Technologies</h2>
                        </div>

                        <div className="div-right">
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
                    <br/>
                    <br/>
                    <br/>

                    <div className="div-columndiv-experience">
                        <div className="div-left">
                            <h2>Work Experience</h2>
                        </div>

                        <div className="div-right">
                            <i><h4 className="div-title">Data Analyst, Peer Mentor</h4></i>
                            <h5>Borough of Manhattan Community College,New York, NY, Feburary 2016 - Present</h5>
                            <p className="job-description">
                                Work in a group size of over 8 Data Analysts. Constantly coorperate with leadership
                                team to analyst over 80 mentors log data, and generate useful report by using statistical
                                method. Help mentees to increase self-confidence and self-esteem by envolving
                                campus programs and activities. 

                            </p>

                            <br/><br/><br/><br/>
                            
                            <i><h4 className="div-title">Computer Science Tutor</h4></i>
                            <h5>CUNY Research Foundation,New York, NY, Feburary 2017 - Present</h5>
                            <p className="job-description">
                                Instruct middle school students on basic math and algorithm behind coding.
                                One-to-group tutoring methology in HTML, CSS, Scratch, and Codester.com challenges. Cooperate host
                                teacher to analyst and discuss each student's academic performance, and suggestions to
                                create lesson plan.

                            </p>

                            <br/><br/><br/><br/>    

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


            <div className="container-fluid-self contact-bg" id="contact">
               
                <div className="content">
                    <h2>Aspiring to become a Software Engineer.</h2>
                    <ul className="social-icon-list">
                        <li className="social-icon-item"> 
                            <a className="link" href="http://github.com/sheng1302" >
                                <img className="social-icon-img" src={this.state.github} alt="More projects on github"/> </a>
                        </li>

                        <li className="social-icon-item"> 
                            <a className="link" href="mailto:sheng1302@gmail.com" >
                                <img className="social-icon-img" src={this.state.email} alt="Contact me through Email"/> </a>
                        </li>

                    </ul>
                    <p>© 2018 All rights reserved.</p>
                </div>

                
            </div>

        </div>
        )
    }
}

export default App;


/*
<div className = "App">

                    <nav className="navbar navbar-inverse navbar-fixed-top">

                        <div className="container-fluid">

                        <ul className="nav navbar-nav" >
                            <li className="nav-item active" >
                                <a className="nav-link" href="#">Home </a></li>
                            <li className="nav-item">
                                <a className="nav-link" href="#goal">Goal</a></li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a></li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Forum</a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-inline navbar-right">
                            <li className="nav-item">
                                <button type="button" onClick={() => this.createUserWithGoogleEmail()} className="btn btn-primary" id="login-bt">Google Sign-in</button></li>
                            <li className="nav-item">
                                <p className="show-after-log" id="log-suces" ></p></li>
                            <li className="nav-item">
                                <img className="img-rounded show-after-log" id="profile-photo" alt="profile"/></li>
                            <li className="nav-item dropdown">
                                <button className="btn btn-primary dropdown-toggle show-after-log " id="dropdown-bt" type="button" data-toggle="dropdown">
                                    More<span className="caret"></span></button>
                                <ul className="dropdown-menu nav-item" role="menu" aria-labelledby="menu1">
                                    <li className="nav-item">
                                        <p>More features coming soon...</p></li>
                                </ul>
                            </li>
                            <li className="nav-item"> 
                                <button type="button" 
                                 className="btn btn-default show-after-log" 
                                 id="sign-out"
                                 onClick={()=>this.googleSignOut()}>Sign out</button> </li>
                        </ul>

                    </div>
                </nav>
            
                
        
            <div className="container-fluid-self about-bg" id="#home">
        
                    <h3>Welcome to Sheng's personal page</h3>
                    <div className="content">
                        <p className="margin">Here, you will be get to know I am, and what I am passioned about...</p>
                        <p>" It's not at all important to get it right the first time. It's vitally important to get it right the last time. "</p>
                        <p>by - Andrew Hunt and David Thomas</p>
        
                    </div>
        
        
            </div>
        
           
            <div className="container-fluid-self mission-bg" id="goal">
        
                <h3 className="margin">My Goal and Passion:</h3>
                <div className="content">
                    <p>Aspiring to become a Software Engineer</p>
        
        
                </div>
        
            </div>
        
        
            <div className="container-fluid-self contact-bg" id="contact">
        
                <h3 className="margin"> Contact information: </h3>
                <div className="content">
                    <p>Sheng Liu</p>
                    <a className="link" href="http://github.com/sheng1302">Github</a>
                    <p>sheng1302@gmail.com</p>
                </div>
            </div>
            
            </div> 
            
            
            
            
            
            
            
                                <ul className="nav navbar-nav navbar-inline navbar-right">
                        <li className="nav-item">
                            <button type="button" onClick={() => this.createUserWithGoogleEmail()} className="btn btn-primary" id="login-bt">Google Sign-in</button></li>
                        <li className="nav-item">
                            <p className="show-after-log" id="log-suces" ></p></li>
                        <li className="nav-item">
                            <img className="img-rounded show-after-log" id="profile-photo" alt="profile"/></li>
                        <li className="nav-item dropdown">
                            <button className="btn btn-primary dropdown-toggle show-after-log " id="dropdown-bt" type="button" data-toggle="dropdown">
                            More<span className="caret"></span></button>
                            <ul className="dropdown-menu nav-item" role="menu" aria-labelledby="menu1">
                                <li className="nav-item">
                                <p>More features coming soon...</p></li>    
                            </ul>
                        </li>
                        <li className="nav-item"> 
                            <button type="button" 
                            className="btn btn-default show-after-log" 
                            id="sign-out"
                            onClick={()=>this.googleSignOut()}>Sign out</button> </li>
                    </ul>*/