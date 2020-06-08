import React from 'react'
function Array(props) {   
    return(
         <li> {props.value}</li>  
       
    );   
}
function Test(props) {
    const array = [1,2,3,5];
    const listItem = array.map((num) => (
        <Array key={num.toExponential()} value={num} />
    ));
    return(
        <ul>
            {listItem}
        </ul>
           
      
    )
 
}
export default Test