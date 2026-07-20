import React from 'react'
import { Link } from 'react-router-dom'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';

const Nav = () => {
    const posts = useStoreState((state) => state.posts);
    const search = useStoreState((state) => state.search);
    const setSearch = useStoreActions((actions) => actions.setSearch);
    const setSearchResult = useStoreActions((actions) => actions.setSearchResult);

    useEffect(() => {
        const filterResults = posts.filter(post => ((post.body).toLocaleLowerCase()).includes(search.toLocaleLowerCase())
            || ((post.title).toLocaleLowerCase()).includes(search.toLocaleLowerCase())
        );

        setSearchResult(filterResults.reverse());
    }, [posts, search, setSearchResult])

    return (
        <nav className='Nav'>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='search'>Search Posts</label>
                <input type="text"
                    id='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav