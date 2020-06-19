import React, { useState, useEffect } from 'react'

function UseStateValue(params) {
    const [count, setCount] = useState(0);
    return (
        <>
        Count: {count}
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    );
}

export default function Test (props) {

    return(
        <div>
           <UseStateValue/>
        </div>
    )
}