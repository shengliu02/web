import React, {Component} from 'react';
import Axios from 'axios';

class MessageBoard extends Component{

    constructor(){
        super();
        this.state = {
            name : "",
            comment : "",
            items : [],
            status : "",
        };

    }

    handleSubmit(event){
        const api_url = "http://localhost:8080/msgboard_api"
        if(this.state.name === ""){
            this.setState( {name:"Anonymous"} );
        }
        

        const body = {
            "client_name" : this.state.name,
            "msg" : this.state.comment
        }

        if(this.state.comment !== ""){
            Axios.post(api_url,body)
            .then( (res) => {
           
                this.getItems();
                this.setState( {status : "Thank you for your comment! You comment has been post."} )
        
                
            })
            .catch( (err) => {
                console.log(err);
            })
        } else{
            this.setState({status :"Comment can not be empty!"});
        }

    }

    


    handleNameChange(e){
        this.setState({name:e.target.value});
    }

    handleCommentChange(e){
        this.setState({comment:e.target.value});
    }

    componentDidMount(){

        this.getItems();
    }


    getItems(){
        const api = 'http://localhost:8080/msgboard_api/';
        Axios.get(api)
        .then( (res) => {
            this.setState({items : res.data});
        })
        .catch( (err) => {
            console.log(err);
        })
    }


    render(){
        return(
        <div className = "board-container">
            <div className = "container-fluid-self form-group body-bg">

                <label for="usr">Your Name:  </label>
                <input type="text" id="msgInput-name" placeholder="anonymous" 
                    onChange={(e) => this.handleNameChange(e)}/><br/>
                <label for="comment">Comment: </label><br/>
                <textarea className="form-control" type="text" id="msgInput-message" rows = "4" placeholder="Type your comment here!"
                    onChange={(e)=> this.handleCommentChange(e)}/><br/>
                <input type="button" value="post" onClick={(event) => this.handleSubmit(event)}/>

                <p id="statusbar">{this.state.status}</p>

            </div>
            <div className = "container-fluid-self form-group msg-board">
                
                <ul className="msg-list">
                {(this.state.items.map( (item,index)=>{
                    return(
                        <div className="msg-item">
                            <h5> {index + 1}. {item.client_name} Commented In {item.date}</h5>
                            <p>{item.msg}</p>
                            <br/>
                        </div>
                    )
                }))}
                </ul>
            </div>
        </div>
        )
    }
}

export default MessageBoard;