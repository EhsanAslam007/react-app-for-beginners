import React from 'react'
import Input from './Input';

const Content = ({ color, setColor, hexValue, setHexValue, isDark, setIsDark }) => {
    return (
        <main>
            <div className='square' style={{
                 background: color,
                 color: isDark ? " #000" :" #fff"
                 }}>
                <p className='para'>
                    {color ? color : "Empty Value"}
                </p>
                <p>
                    {hexValue ? hexValue : null}
                </p>
            </div>
            <Input
                color={color}
                setColor={setColor}
                setHexValue={setHexValue}
                setIsDark={setIsDark}
                isDark={isDark}
            />
        </main>
    )
}

// square.defaultProps = {
//     color: "Empty Color Value"
// }

export default Content