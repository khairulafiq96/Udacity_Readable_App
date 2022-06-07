export const LOAD_POSTS = "LOAD_POSTS";
export const ADD_POSTS = "ADD_POSTS";

export function loadPosts(posts) {
    return {
      type: LOAD_POSTS,
      posts,
    };
  }

  export function addNewPosts(postsDetails) {
    return {
      type: ADD_POSTS,
      postsDetails,
    };
  }