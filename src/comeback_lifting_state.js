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
        this.input = React.createRef();
    }
    handleOnchange = (e)=> {
        // this.setState( ()=> ({ temp: this.input.current.value }));
        // e.target.value
         this.input = e.target.value
         console.log(e.target.value)
    }
    handleOnsubmit = (e)=>{
        console.log(e)
        this.input = e.target.value
        e.preventDefault()
    }
    
    render() { 
        this.input = 0
        return ( 
                <legend>
                <form  onSubmit={this.handleOnsubmit}>
                    <input type="text" name="temp"  ref={(()=> this.handleOnchange)} onChange={this.handleOnchange}/>
                    <input type="submit" value="Submit"/>
                    </form>
                    <TempretureChecker celcuis={this.input}/>
                </legend>
         );
    }
}
 
function Test(props) {
    return(
        <div>
            <Calculator />
        </div>
    )
    
}
export default Test;