import React, { Component } from "react";
import LeftNav from './components/LeftNavBar';
import BodyContent from './components/bodycontent';

class App extends Component{
    render(){
        return(
            <div>
                <LeftNav/>
                <BodyContent/>
            </div>
        )
    }
}

export default App;