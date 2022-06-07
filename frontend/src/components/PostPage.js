import React, {Component} from 'react'
import { getSortedPostsArray } from '../utils/helpers'
import {connect} from 'react-redux';
import Post from './Post';

import {NavLink, Link} from 'react-router-dom'


class PostPage extends Component {

  render(){

    var {posts} = this.props

    function LinktoPost(item){
      const finalLink = item.category + '/' + item.id
      return finalLink
    }
    

    return (
        <div>
          <br></br>
          All Category
          <br></br>
          {posts.categories.map((item)=>(
         
             <NavLink exact to={item.path} key={item.name}> {item.name} || </NavLink>
       
          ))} <NavLink exact to='/new'> New Post </NavLink>


          <br></br>
          <br></br>
          All posts
          <br></br>
          <br></br>
          {posts.posts.map((item) =>(
            <div key={item.id}>
                <b>{item.title}</b>
                <br></br>
                {item.body}
                <br></br>
                Author : {item.author}
                <br></br>
                Vote : {item.voteScore}
                <br></br>
                <Link to={LinktoPost(item)}> View Post </Link>
                <br></br>
                <br></br>

                

            </div>
          ))}

   


   
        </div>
    )
  }
}

function mapStateToProps({posts}){

  return {posts}
}


export default connect(mapStateToProps)(PostPage);
