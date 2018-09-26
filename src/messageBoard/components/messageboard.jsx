import React, {Component} from 'react';
import Axios from 'axios';

class MessageBoard extends Component{

    constructor(props){
        super(props);
        this.state = {
            name : "",
            comment : "",
            items : [],
            status : "",
        };

    }

    handleSubmit(event){
        
        if(this.state.comment !== ""){
            if(this.state.name === ""){
                this.setState( {name:"Anonymous"}, () => {
                    const body = {
                        "client_name" : this.state.name,
                        "msg" : this.state.comment
                    }

                    this.postComment(body);
                } )
                
            }else{
                const body = {
                    "client_name" : this.state.name,
                    "msg" : this.state.comment
                }

                this.postComment(body);
            }
        } else{
            this.setState({status :"Comment can not be empty!"});
        }

    }

    postComment(body){
        const api_url = "./msgboard_api"
            Axios.post(api_url,body)
            .then( (res) => {
           
                this.getItems();
                this.setState( {status : "Thank you! You comment has been post."} );
                this.setState( {comment : ""} );
                this.setState( {name : ""} );
            })
            .catch( (err) => {
                console.log(err);
            })
    
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
        const api = './msgboard_api';
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

                <label for="usr">Your Name:  </label> <span className="span"/>
                <input type="text" id="msgInput-name" placeholder="anonymous" 
                    value={this.state.name} onChange={(e) => this.handleNameChange(e)}/><br/>
                <label for="comment">Comment: </label><br/>
                <textarea className="form-control" type="text" id="msgInput-message" rows = "4" placeholder="Type your comment here!"
                    value={this.state.comment} onChange={(e)=> this.handleCommentChange(e)}/><br/>
                <input type="button" class="btn btn-default" value="post" onClick={(event) => this.handleSubmit(event)}/>

                <p id="statusbar">{this.state.status}</p>

            </div>
            <div className = "container-fluid-self form-group msg-board">
                
                <ul className="msg-list">
                {(this.state.items.map( (item,index)=>{
                    const date = new Date(item.date);
                    return(
                        <div className="msg-item">
                            <h5 className="headtext-rendered"> {index + 1}. {item.client_name} Commented In {date.getMonth() + 1 + "-"+ date.getDate() + "-" +date.getFullYear()}</h5>
                            <span className="qtext-rendered">{item.msg}</span>
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