import React,{Component} from 'react';
import NavBar from '../about/components/nav'; // import navbar from about/components/nav
import MsgBoard from './components/messageboard';
import './style/msgboard.css';


class App extends Component{

    render(){
        return(
            <div className="msg-panel">
                <NavBar/>
                <MsgBoard/>
            </div>
        )
    }

}

export default App;