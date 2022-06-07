const url = "http://localhost:3001"
const headers = {
  'Accept': 'application/json',
  'Authorization': 'standalone_token',
  'Content-Type': 'application/json'
}

// Initial Data
export function getInitialData() {
  return Promise.all([
    getCategories(),
    getAllPosts(),
  ]).then(([categories, posts]) => ({
    categories,
    posts,
  }))
}

// Categories
export const getCategories = () =>
  fetch(`${url}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

// Posts
export const getAllPosts = () =>
  fetch(`${url}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addPost = (post) =>
  fetch(`${url}/posts`, {
    method: 'post',
    headers,
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data)

export const updatePost = (post) =>
  fetch(`${url}/posts/${post.id}`, {
    method: 'put',
    headers,
    body: JSON.stringify(post)
  }).then(res => res.json())
    .then(data => data)

export const deletePost = (id) =>
  fetch(`${url}/posts/${id}`, {
    method: 'delete',
    headers
  }).then(res => res.json())
    .then(data => data)

// Posts
export const getPost = (id) =>
  fetch(`${url}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)


// Votes
export const upvotePost = (id) => votePost(id, 'upVote')

export const downvotePost = (id) => votePost(id, 'downVote')

const votePost = (id, option) =>
  fetch(`${url}/posts/${id}`, {
    method: 'post',
    headers,
    body: JSON.stringify({ option })
  })
    .then(res => res.json())
    .then(data => data)

// Comments
export const getCommentsByPost = (id) =>
  fetch(`${url}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addComment = (comment) =>
  fetch(`${url}/comments`, {
    method: 'post',
    headers,
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(data => data)

export const getComment = (id) =>
  fetch(`${url}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const updateComment = (id, comment) =>
  fetch(`${url}/comments/${id}`, {
    method: 'put',
    headers,
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(data => data)

export const deleteComment = (id) =>
  fetch(`${url}/comments/${id}`, {
    method: 'delete',
    headers
  })

export const upvoteComment = (id) => voteComment(id, 'upVote')

export const downvoteComment = (id) => voteComment(id, 'downVote')

const voteComment = (id, option) =>
  fetch(`${url}/comments/${id}`, {
    method: 'post',
    headers,
    body: JSON.stringify({ option })
  })
    .then(res => res.json())
    .then(data => data)