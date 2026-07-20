import React from 'react'
import colorNames from 'colornames'

const Input = ({ color, setColor, setHexValue, setIsDark, isDark }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                className='color-input'
                type='text'
                placeholder='Add Color Name'
                autoFocus
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                    setHexValue(colorNames(e.target.value));                
                }}
            />
            <button
            className='btn-text'
            type='button'
            onClick={()=> setIsDark(!isDark)}
            >
            Change Text Color
            </button>
        </form>
    )
}

export default Input