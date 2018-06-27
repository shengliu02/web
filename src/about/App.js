import React, {Component} from 'react';
import Home from './components/about';
import NavBar from './components/nav';
import Footer from './components/footer';

class App extends Component {
    render(){

        return(
            <div>
                <NavBar />
                <Home/>
                <Footer/>
            </div>
        )
    }
}

export default App;


