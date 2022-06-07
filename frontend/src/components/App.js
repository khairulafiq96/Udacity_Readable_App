import React, {Component} from 'react'
import {Switch,Route, withRouter} from 'react-router-dom'

import PostPage from './PostPage';
import CategoryPage from './CategoryPage';
import Post from './Post';
import CommentAdd from './CommentAdd';
import CommentEdit from './CommentEdit';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { fetchInitialData2 } from '../actions/index';

import * as actions from '../actions/index';
import PostNew from './PostNew';





class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

 
  componentDidMount= async () => {
    await this.props.dispatch(fetchInitialData2()) 
    this.setState({loaded: true})
  }

  pages(){
    return (
      <Switch>
        <Route exact path="/" component={PostPage} />
        <Route exact path="/new" component={PostNew} />
        <Route exact path='/:category_name' component={CategoryPage}/>
        <Route exact path='/:category_name/:post_id' component={Post}/>
        <Route exact path='/:category_name/commentadd/:post_id' component={CommentAdd}/>
        <Route exact path='/commentedit/:comment_id' component={CommentEdit}/>
    </Switch>
    )
  }



  render(){
    return (
      
        <div>
          {this.state.loaded?this.pages():null}
         
        </div>
    )
  }
}

function mapStateToProps({posts}) {
  return {
    posts,
  }
}


export default withRouter(connect(mapStateToProps)(App));
