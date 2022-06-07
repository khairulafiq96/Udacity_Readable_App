import { Button } from 'bootstrap'
import React,{Component} from 'react'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { submitNewPost } from '../actions/index';

class PostNew extends Component{

    state = {
        title : "",
        body : "",
        author : "",
        category : "",
        toHome : false
    }

    handleTitle = (e) => {
        let myTitle = e.target.value;
    
        this.setState(() => ({
            title: myTitle,
        }));
        };
    
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

    handleCategory = (e) => {
        let myCategory = e.target.value;
    
        this.setState(() => ({
            category: myCategory,
        }));
        };

    handleSubmit = (e) => {
        e.preventDefault();

        const {title,body,author,category} = this.state
        const {dispatch} = this.props

        dispatch(submitNewPost(this.formatResponse(title,body,author,category))).then(()=>
        this.setState(()=>({
            title : "",
            body : "",
            author : "",
            category : "",
            toHome: true
        })))

        
    }

    formatResponse (title,body,author,category){
        return {
            id : (Math.random() + 1).toString(36).substring(7),
            timestamp : Date.now(),
            title : title,
            body : body,
            author : author,
            category : category
        }
    }


render(){

    const {posts} = this.props
    const {title,body,author,category,toHome} = this.state

    if(toHome == true){
        return <Redirect to="/"></Redirect>
    }

    return (
        <div>
            New Post
            <br></br>
            <br></br>
            <form>
                Title : <input type="text" value={title} onChange={this.handleTitle}></input>
                <br></br>
                Body : <input type="text" value={body} onChange={this.handleBody}></input>
                <br></br>
                Author : <input type="text" value={author} onChange={this.handleAuthor}></input>
                <br></br>
                Category : <select onChange={this.handleCategory}>
                    <option value="" >Select one value</option>
                    {posts.categories.map((item)=>(
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
                <br></br>
                <br></br>
                <button onClick={this.handleSubmit} 
                    disabled={title===""||body===""||author==="" ||category===""}>Submit</button>
                <br></br>
            </form>
        </div>
    )
}
}

function mapStateToProps({posts}){



    return {posts}
  }

export default connect(mapStateToProps)(PostNew)