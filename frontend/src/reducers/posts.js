import {LOAD_POSTS, ADD_POSTS} from '../actions/posts'

export default function posts(state=null,action){
    switch (action.type){
        case LOAD_POSTS:
            return{
                ...state,
                ...action.posts,
                
            }
        case ADD_POSTS:
            return{
                ...state,
                ...action.posts
            }
            
       
        default:
            return state;
    }
}
