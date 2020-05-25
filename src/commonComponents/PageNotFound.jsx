import React, { Component } from 'react';
import NavBar from '../about/components/nav';

class PageNotFound extends Component{

    render(){
        return(
            <div>
                <NavBar/>
                <p>Error 404: Page not found! Please use the navigator to get to the right page.</p>
            </div>
        )
    }
}

export default PageNotFound;