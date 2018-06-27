import React, {Component} from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from './about/App';
import Blog from './blogs/App';
import NavBar from './about/components/nav';

//ReactDOM.render(<App/>, document.getElementById('root'));
class App extends Component {
    render(){

        return(
         
            <Router>
                <div> 
                
                <Route exact name="home" path="/" component={Home}/>
                <Route name="blog" path="/blog" component={Blog}/>
                
                </div>
            </Router>
         
        )
    }
}

export default App
