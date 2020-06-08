import React from 'react'

class Toggle extends React.Component{
    constructor(props){ 
        super(props);  
        this.state = {isToggle: true};
        // this.handleClick;

    }
    handleClick = ()=>{
        console.log("it was click!");
        this.setState(state=> ({
            isToggle: !state.isToggle
        }))     
       };

    render(){
        return (
        <button onClick={this.handleClick}>
            {this.state.isToggle ? "ON" : "OFF"}
        </button>
        );
    }
}

 const Test = ()=>
{
    function handleClick(a) {
        a.preventDefault();
        console.log("You just click me!");
        
    };
    return(
        <div>
            <Toggle/>
            <br/>
            <button onClick={handleClick}> click me</button>
        </div>
    );
}
export default Test;
