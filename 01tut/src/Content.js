import React from 'react'
import { useState } from 'react';
import { jsx } from 'react/jsx-runtime';
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
    const [name, setName] = useState('Ehsan');
    const [count, setCount] = useState(0);

    const handleName = () => {
        const name = ["Ehsan", "Noman", "Zeeshan"];
        const int = Math.floor(Math.random() * 3);
        setName(name[int]);
    }

    const handleclick = () => {
        console.log("Button Clicked");
    }
    const handleclick2 = () => {
        setCount(count + 1);
        console.log(count);
    }
    const handleclick3 = (e) => {
        console.log(e);
    }
    return (
        <main>
            <p onDoubleClick={handleclick}>Hello {name}!</p>
            <button onClick={handleName}>Change Name</button>
            <button onClick={handleclick2}>Click It!</button>
            <button onClick={(e) => handleclick3(e)}>Click It!</button>
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