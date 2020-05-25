import React, {Component} from 'react';
import Home from './components/about';
import NavBar from './components/nav';
import Footer from './components/footer';
import LeftNavBar from './components/LeftNavBar';
import './styles/index.css';

class App extends Component {
    render(){

        return(
            <div>
                <NavBar />
                <LeftNavBar/>
                <Home/>
                <Footer/>
            </div>
        )
    }
}

export default App;


