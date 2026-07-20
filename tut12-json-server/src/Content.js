import React from 'react'
import { useState } from 'react';
import { jsx } from 'react/jsx-runtime';
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
    const [name, setName] = useState('Ehsan');
    const [count, setCount] = useState(0);

    return (
        <main>
            {items.length ? (
                <ItemList
                items={items}
                handleDelete={handleDelete}
                handleCheck={handleCheck}
                />
            ) : (<p>Your List IS Empty!</p>)}
        </main>
    )
}

export default Content