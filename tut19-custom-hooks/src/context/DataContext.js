import { useState, useEffect, createContext } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns'
import api from '../api/posts'
import useWindowSize from '../hooks/useWindowSize';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [postbody, setPostBody] = useState('');
    const [editBody, setEditBody] = useState('');
    const { width } = useWindowSize();
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')

    const navigate = useNavigate();

    useEffect(() => {
        setPosts(data)
    }, [data])

    useEffect(() => {
        const filterResults = posts.filter(post => ((post.body).toLocaleLowerCase()).includes(search.toLocaleLowerCase())
            || ((post.title).toLocaleLowerCase()).includes(search.toLocaleLowerCase())
        );

        setSearchResult(filterResults.reverse());
    }, [posts, search])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id, title: postTitle, datetime, body: postbody };
        try {
            const response = await api.post('/posts', newPost);
            const allPosts = [...posts, response.data];
            setPosts(allPosts);
            setPostTitle('');
            setPostBody('');
            navigate('/');
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    const handleUpdate = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatePost = { id, title: editTitle, datetime, body: editBody }
        try {
            const response = await api.put(`/posts/${id}`, updatePost);
            setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
            setEditTitle('');
            setEditBody('');
            navigate('/');
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`)
            const postList = posts.filter(post => post.id !== id);
            setPosts(postList);
            navigate('/');
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
    return (
        <DataContext.Provider value={{
            width
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;