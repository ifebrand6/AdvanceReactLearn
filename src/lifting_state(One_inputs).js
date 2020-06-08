import React from 'react'

function TempretureChecker(props){
    if (props.celcuis >= 100) {
        return(
            <h1>Water will boil!</h1>
        );
        
    } return (
        <h2> Water will not boil, oops!</h2>
    );
};
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temp: null}
    }
    handleOnchange = (e)=> {
        this.setState({ temp: e.target.value });
    }
    handleOnsubmit = (e)=>{
        e.preventDefault()
    }
    
    render() { 
        const temp = this.state.temp;
        return ( 
                <legend>
                <form  onSubmit={this.handleOnsubmit}>
                    <input type="text" name="temp"  onChange={this.handleOnchange}/>
                    <input type="submit" value="Submit"/>
                    </form>
                    <TempretureChecker celcuis={temp}/>
                </legend>
        );
    }
}
 
function Test(props) {
    
    return(
        <Calculator/>
    )
}
export default Test;