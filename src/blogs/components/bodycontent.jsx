import React, { Component } from "react";


class BodyContent extends Component{

    render(){
        return(
            <div>
                {/* The content here is depends on the */}

                <div className="container">
                    <div className="blog-header">
                        <h4 className="title">
                            Thailand Trip 
                        </h4>
                        <p className="date">
                            Updated Date: June 28, 2018.
                        </p>

                    </div>

                    <br/>
                    <br/>

                    <div className="blog-body">
                        {/* all the body paragraphs*/}
                        <p className="indent"> Come back later, Sheng is still working on his journal and web page contructions. :) 
                        </p>
                    </div>
                </div>

            </div>
        )
    }

}

export default BodyContent

