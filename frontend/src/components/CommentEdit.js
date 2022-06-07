import React, {Component} from 'react'
import {connect} from 'react-redux';
import { editComments } from '../actions';


class CommentEdit extends Component{

    state = { 
        body : this.props.comment.body,
        author : "",
        displayEditDetails : false
    }

    handleBody = (e) => {
        let myBody = e.target.value;
    
        this.setState(() => ({
            body: myBody,
        }));
        };
    
    handleAuthor = (e) => {
        let myAuthor = e.target.value;
    
        this.setState(() => ({
            author: myAuthor,
        }));
        };

    handleSubmit = async (e) => {
        e.preventDefault();

        const {body,author} = this.state
        const {dispatch} = this.props

        await dispatch(editComments(
            this.props.comment.id,
            this.props.comment.parentId,
            this.formatResponse(body))).then(()=>
        this.setState(()=>({
            body : "",
            displayEditDetails: false
        })))

        
    }

    handleEditButton = () => {
        
        this.setState(() => ({
            displayEditDetails: this.state.displayEditDetails ? false : true,
            body :  this.props.comment.body

        }));
        };


    formatResponse (body){
        return {
            id : this.props.comment.id,
            timestamp : Date.now(),
            body : body,
            parentId : this.props.comment.parentId
        }
    }



render(){
    const {body,author} = this.state
    const {comment} = this.props
    return (
        <div>
            <br></br>
            <button onClick={this.handleEditButton}>Edit comment</button>
            {this.state.displayEditDetails ?

                <div>
                    <br></br>
                    Body : <input type="text" value={body} onChange={this.handleBody}></input>
                    <br></br>
                    Author : <input disabled type="text" value={comment.author} onChange={this.handleAuthor}></input>
                    <br></br>
                    <br></br>
                    <button  onClick={this.handleSubmit} 
                            disabled={body===""}>Submit</button>
                    <br></br>
                    <br></br>
                </div>


             : null }
            
        </div>
    )
}
}

function mapStateToProps({posts, comments}){



    return {posts, comments}
  }

export default connect(mapStateToProps)(CommentEdit)