import React, {Component} from 'react'
import { getSortedPostsArray } from '../utils/helpers'
import {connect} from 'react-redux';
import { element } from 'prop-types';
import { fetchComments2 } from '../actions/index';
import {Link} from 'react-router-dom'

import CommentAdd from './CommentAdd';
import CommentEdit from './CommentEdit';
import PostEdit from './PostEdit';


class Post extends Component {

  state = {
    loaded: false,
    commentLoaded : false
  }

  componentDidMount= async () => {
    await this.props.dispatch(fetchComments2(this.props.match.params.post_id)).then(()=>{
      this.setState({loaded: true})
    })
    
  }


  render(){

    const {posts,comments} = this.props
    const {post_id} = this.props.match.params
    //const post = filterPosts(posts,post_id)
    const post = posts.posts.filter(filterPosts)
    const comment = Object.values(comments).sort(function(a, b) {
      return comments[a] - comments[b];
    })

    function filterPosts(item){
      return item.id == post_id
    }

    function convertDate(item){
      var date = new Date(item)
      return date.toLocaleString()
    }


    function page(){
      return(
        <div>
            Post Detail Page 
            <br></br>
            <br></br>
            {post.map((item) =>(
            <div key={item.id}>
                
                <b>{item.title}</b>
                <br></br>
                {item.body}
                <br></br>
                Author : {item.author}
                <br></br>
                Vote : {item.voteScore}
                <br></br>
                <PostEdit></PostEdit>
                <br></br>
                <CommentAdd itemID={item.id}></CommentAdd>
            </div>
          ))}

          <b>Comments</b>
          <br></br>
          <br></br>
          {comment ? comment.map((item)=>(
            <div key={item.id}>
                {item.body}
                <br></br>
                Author : {item.author}
                <br></br>
                Vote Score : {item.voteScore}
                <br></br>
                Time created : {convertDate(item.timestamp)}
                <br></br>
                <CommentEdit comment={item}></CommentEdit>
                <br></br>
                <br></br>
            </div>
          )) : <div>Loading...</div>
          }

        </div>
      )
    }



    return (
            <div>
              {this.state.loaded ? page() :<div>Loading..</div>}
        </div>

    )
  }
}

function mapStateToProps({posts, comments}){



  return {posts, comments}
}


export default connect(mapStateToProps)(Post);
