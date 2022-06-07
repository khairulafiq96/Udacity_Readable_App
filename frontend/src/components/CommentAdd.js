import React,{Component} from 'react'
import { addComments } from '../actions/index';
import {connect} from 'react-redux';
import { Redirect,Link } from 'react-router-dom';

class CommentAdd extends Component{

    state = { 
        body : "",
        author : "",
        toHome : false
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


    formatResponse (body,author){
        return {
            id : (Math.random() + 1).toString(36).substring(2),
            timestamp : Date.now(),
            body : body,
            author : author,
            parentId : this.props.itemID
        }
    }

     handleSubmit = async (e) => {
        e.preventDefault();

        const {body,author} = this.state
        const {dispatch} = this.props

        await dispatch(addComments(this.formatResponse(body,author), this.props.comments)).then(()=>
        this.setState(()=>({
            body : "",
            author : "",
            toHome: true
        })))

        
    }

    LinktoPost(category_name,post_id){
        const finalLink = category_name + '/' + post_id
        console.log(finalLink)
        return finalLink
      }





render(){

    //const {category_name,post_id} = this.props.match.params
    const {body,author} = this.state


    /*if(toHome == true){
        return <Redirect to={this.LinktoPost(category_name,post_id)}></Redirect>
    }*/
    


    return(
        <div>
            <b>Add New Comment</b>
            <br></br>
            <br></br>
            Body : <input type="text" value={body} onChange={this.handleBody}></input>
            <br></br>
            Author : <input type="text"  value={author} onChange={this.handleAuthor}></input>
            <br></br>
            <br></br>
            <button onClick={this.handleSubmit} 
                    disabled={body===""||author===""}>Submit</button>
            <br></br>
            <br></br>
        </div>
    )
}
}


function mapStateToProps({comments}){
    return {comments}
  }


export default connect(mapStateToProps)(CommentAdd)