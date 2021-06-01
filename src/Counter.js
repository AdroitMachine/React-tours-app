import React, { useState } from 'react'

const Counter = () => {
    const [curr, setCurr] = useState(0)
    const increase = () => {
        setCurr(prev => {
            return prev + 1;
        })
    }
    const decrease = () => {
        setCurr(prev => {
            return prev - 1;
        })
    }
    return (
        <div>
            <h1>{curr}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter
