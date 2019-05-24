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
            month: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."],
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
        <div className = "board-container section-height-full overlay">

            <section className = "section-height-default">
                <div className = "container-fluid-self form-group">

                    <label for="usr">Your Name:  </label> <span className="span"/><span className="span"/><span className="span"/>
                    <input type="text" id="msgInput-name" placeholder="anonymous" 
                        value={this.state.name} onChange={(e) => this.handleNameChange(e)}/><br/>
                    <label for="comment">Comment: </label><br/>
                    <textarea className="form-control" type="text" id="msgInput-message" rows = "4" placeholder="Type your comment here!"
                        value={this.state.comment} onChange={(e)=> this.handleCommentChange(e)}/><br/>
                    <input type="button" class="btn btn-default" value="post" onClick={(event) => this.handleSubmit(event)}/>

                    <p id="statusbar">{this.state.status}</p>

                </div>
            </section>

            <section className = "section-height-default">
                <div className = "container-fluid-self form-group msg-board">
                
                    {(this.state.items.map( (item,index)=>{
                        const date = new Date(item.date);
                        return(
                            <div className="msg-item">

                                <header>
                                        <span className="text-hightlight-brown ">{item.client_name}</span> wrote
                                        <time className="time" datetime={date.getFullYear()+"-"+date.getMonth() + 1 + "-"+ date.getDate()}> — { this.state.month[date.getMonth()]+ " "+ date.getDate() + ", " +date.getFullYear()}</time>

                                    </header>
                                    <div className="comment-content">
                                        <p><p className="qtext-rendered">{item.msg}</p>
                                        </p>
                                    </div>
                            </div>
                        )
                    }))}

                </div>
                <br/>
                <br/>
                <br/>
                <br/>

            </section>

            
        
        </div>
        )
    }
}

export default MessageBoard;