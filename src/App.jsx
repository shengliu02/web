import React, {Component} from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Home from './about/App';
import Blog from './blogs/App';
import PageNotFound from './public/PageNotFound';

//ReactDOM.render(<App/>, document.getElementById('root'));
class App extends Component {
    render(){

        return(
         
            <Router>
                <div> 
         
                <Switch>
                    
                    <Route exact name="home" path="/" component={Home}/>
                    <Route name="blog" path="/blog" component={Blog}/>
                    <Route component={PageNotFound}/>
                </Switch>
                </div>
            </Router>
         
        )
    }
}

export default App
