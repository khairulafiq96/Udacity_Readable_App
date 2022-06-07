import {LOAD_COMMENTS,ADD_COMMENTS,EDIT_COMMENTS} from '../actions/comments'

export default function comments(state={},action){
    switch (action.type){
        case LOAD_COMMENTS:
            return{
                ...state,
                ...action.comments,
                
            }
        case ADD_COMMENTS:
            return{
                ...state,
                ...action.comments,
                ...action.comment
            }

        case EDIT_COMMENTS: 

            
            const comment = Object.values(state).filter(filterComment)
            
            function filterComment(item){
                return item.id === action.comment.id
            }

            const myIndex = Object.keys(comment)

            console.log(comment)
            
            console.log({...state[myIndex[0]],...action.comment})


            return {
                ...state,
     
            }
            
       
        default:
            return state;
    }
}
