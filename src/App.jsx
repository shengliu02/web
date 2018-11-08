import React, {Component} from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Home from './about/App';
import Blog from './blogs/App';
import MsgBoard from './messageBoard/App';
import PageNotFound from './public/PageNotFound';
import Resume from './resume/Resume';

import './public/index.css';

class App extends Component {
    render(){

        return(
         
            <Router>
                <div> 
         
                <Switch>
                    
                    <Route exact name="home" path="/" component={Home}/>
                    <Route name="blog" path="/blog" component={Blog}/>
                    <Route name="msgBoard" path="/msgboard" component={MsgBoard}/>
                    <Route name="resume" path="/resume" component={Resume}/>
                    <Route component={PageNotFound}/>
                </Switch>
                </div>
            </Router>
         
        )
    }
}

export default App
