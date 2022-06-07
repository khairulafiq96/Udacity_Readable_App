import * as API from '../utils/api'
import { addNewComment, loadComments,editComment } from './comments'
import { loadPosts, addNewPosts } from './posts'
import { loadCategories } from './categories'

export function fetchInitialData(){
    return(dispatch)=> {
        return API.getInitialData().then((posts)=>{
            //console.log(posts.json())
            //dispatch(loadPosts(posts))
            dispatch(loadPosts(posts))

        })
    }
}

export function fetchInitialData2() {
    return (dispatch) => {
        return API.getInitialData()
            .then(({categories, posts}) => {
                categories.forEach((category) => {
                    dispatch(loadCategories(category))
                })
                posts.forEach(post => {
                    dispatch(loadPosts(post))
                })
            })
    }
}

export function submitNewPost(post){
    return(dispatch)=>{
        return API.addPost(post).then((postDetails)=>{
            dispatch(addNewPosts(postDetails))
            dispatch(fetchInitialData())
        })
    }
}

export function fetchComments(id){
    return(dispatch)=>{
        return API.getCommentsByPost(id).then((comments)=>{
            dispatch(loadComments(comments))
        })
    }
}

export function fetchComments2(id){
    return(dispatch)=>{
        return API.getCommentsByPost(id).then(({comments})=>{
            comments.forEach((myComment)=>{
                dispatch(loadComments(myComment))
            })
           
        })
    }
}


export function  addComments(items,myProp){
    return(dispatch)=>{
        return API.addComment(items).then((itemDetails)=>{
            console.log(items.parentId)
            //dispatch(addNewComment(items, myProp))
             dispatch(fetchComments(items.parentId))

        })
    }
}

export function editComments(id,post_id,comment){
    return(dispatch)=>{
        return API.updateComment(id, comment).then((itemDetails)=>{
            dispatch(editComment(comment))
            //dispatch(fetchComments(post_id))
        })
    }
}

export function editPosts(post){
    return(dispatch)=>{
        return API.updatePost(post).then((postDetails)=>{
            dispatch(fetchInitialData())
        })
    }
}