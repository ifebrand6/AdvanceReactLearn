import React, { useState, useEffect } from 'react'
export default function Test (props) {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        //use to prove that the function in useeffect is diff at every render;
        const dad = ()=> {return parseInt(Math.random() * 100)}
        const functionIdentifier = dad()
        console.log(functionIdentifier)
        //end of prove
        document.title = `this is the ${count}`
    },[count]);
   const handleReturn5 = ()=>{
       setCount(5);
       console.log('prevent the useEffect from kicking when the value is abouve 5');
   }
    return(
        <div>
            <h3>Counter with react hooks</h3>
            <p>You click me {count} times</p>
            <button onClick={()=>setCount(count + 1)}>Click Me</button>
            <button onClick={handleReturn5}>return 5</button>
        </div>
    )
}