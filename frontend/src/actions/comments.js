export const LOAD_COMMENTS = "LOAD_COMMENTS";
export const ADD_COMMENTS = "ADD_COMMENTS";
export const EDIT_COMMENTS = "EDIT_COMMENTS";

export function loadComments(comments) {
    return {
      type: LOAD_COMMENTS,
      comments,

    };
  }

  export function addNewComment(comment) {
    return {
      type: ADD_COMMENTS,
      comment

    };
  }

  export function editComment(comment) {
    return {
      type: EDIT_COMMENTS,
      comment

    };
  }