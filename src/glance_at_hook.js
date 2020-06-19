import React, { useState, useEffect } from 'react'

function Test(props) {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `you clicked ${count} times`
    })
    return(
        <div>
            <h3>Counter with react hooks</h3>
            <p>You click me {count} times</p>
            <button onClick={()=>setCount(count + 1)}>Click Me</button>
        </div>
    )
}

export default Test;