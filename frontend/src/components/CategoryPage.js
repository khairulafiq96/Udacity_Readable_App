import React, {Component} from 'react'
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom'


class CategoryPage extends Component {
  render(){

    const {posts} = this.props
    const {category_name} = this.props.match.params
    const categoryPosts = posts.posts.filter(p => (p.category === category_name));

    function LinktoPost(item){
        const finalLink = item.category + '/' + item.id
        return finalLink
      }

    return (
        <div>
            Category Page : <b>{category_name}</b>
            <br></br>
            <br></br>

            {categoryPosts.map((item)=>(
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


export default connect(mapStateToProps)(CategoryPage);
