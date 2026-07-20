import { useState, useEffect, createContext } from "react";
import React from "react";
import useWindowSize from '../hooks/useWindowSize';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const { width } = useWindowSize();
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')


    useEffect(() => {
        setPosts(data)
    }, [data])

    useEffect(() => {
        const filterResults = posts.filter(post => ((post.body).toLocaleLowerCase()).includes(search.toLocaleLowerCase())
            || ((post.title).toLocaleLowerCase()).includes(search.toLocaleLowerCase())
        );

        setSearchResult(filterResults.reverse());
    }, [posts, search])
    
    return (
        <DataContext.Provider value={{
            width, search, setSearch, searchResult, fetchError, isLoading, posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;