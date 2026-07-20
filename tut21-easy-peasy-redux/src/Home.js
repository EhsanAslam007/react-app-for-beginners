import React from 'react'
import Feed from './Feed'
import {useStoreActions, useStoreState} from 'easy-peasy';

const Home = ({ fetchError, isLoading}) => {
    const searchResult = useStoreState((state) => state.searchResult)
    const setSearchResult = useStoreActions((actions) => actions.setSearchResult )
    return (
        <main className='Home'>
            {isLoading && <p className='statusMsg'>Loading posts...</p>}
            {!isLoading && fetchError && <p className='statusMsg' style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (searchResult.length ? <Feed posts={searchResult} /> : <p className='statusMsg'>No post to display.</p>)}
        </main>
    )
}

export default Home