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
                            Updated Date: Feburary 2018.
                        </p>

                    </div>

                    <br/>
                    <br/>

                    <div className="blog-body">
                        {/* all the body paragraphs*/}
                        <p className="indent"> Thailand trip was awsome! And made lots of friend. Continues .... Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                        blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                        blah blah blah blah blah blah
                        </p>
                    </div>
                </div>

            </div>
        )
    }

}

export default BodyContent

