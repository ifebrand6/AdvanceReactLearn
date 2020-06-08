import React from 'react';
import ReactDOM from 'react-dom'




function tick() {
    ReactDOM.render(
        <Test/>,
        document.getElementById('root')
        )
    
}



function Test() {
return <h1>this is a ticking {new Date().toLocaleTimeString()} </h1> 
}

setInterval(tick,10)

export default Test;