import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const navigate = useNavigate();
 const posts = useStoreState((state) => state.posts);
 const postTitle = useStoreState((state) => state.postTitle);
 const postBody = useStoreState((state) => state.postBody);

 const savePost = useStoreActions((actions)=> actions.savePost);
 const setPostTitle = useStoreActions((actions)=> actions.setPostTitle);
 const setPostBody = useStoreActions((actions)=> actions.setPostBody);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postbody };
    savePost(newPost);
    navigate('/');
  }
  return (
    <main className='NewPost'>
      <h2>NewPost</h2>
      <form onSubmit={handleSubmit} className='newPostForm'>
        <label htmlFor="postTitle">Title:</label>
        <input type="text"
          id='postTitle'
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          required
        />
        <label htmlFor='postBody'>Post:</label>
        <textarea
          id='postBody'
          required
          value={postbody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost