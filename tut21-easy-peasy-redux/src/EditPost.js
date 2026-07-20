import React from 'react'
import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { useStoreState, useStoreActions } from 'easy-peasy';
import api from './api/posts'



const EditPost = () => {
    const navigate = useNavigate();
    const posts = useStoreState((state) => state.posts)
    const editTitle = useStoreState((state) => state.editTitle)
    const editBody = useStoreState((state) => state.editBody)

    const editPost = useStoreActions((actions) => actions.editPost);
    const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
    const setEditBody = useStoreActions((actions) => actions.setEditBody);
    const setPosts = useStoreActions((actions) => actions.setPosts);

    const { id } = useParams();
    const getPostById = useStoreState((state) => state.getPostById);
    const post = getPostById(id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [setEditBody, setEditTitle, post])

    const handleUpdate =  (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatePost = { id, title: editTitle, datetime, body: editBody }
        editPost(updatePost);
        navigate('/');
    }
    return (
        <main className='NewPost'>
            <h2>Edit Post</h2>
            {editTitle &&
                <>
                    <form onSubmit={(e) => e.preventDefault()} className='newPostForm'>
                        <label htmlFor="postTitle">Title:</label>
                        <input type="text"
                            id='postTitle'
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            required
                        />
                        <label htmlFor='postBody'>Post:</label>
                        <textarea
                            id='postBody'
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type='submit' onClick={(e) => handleUpdate(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our HomePage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditPost