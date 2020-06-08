import React from 'react';
const scalesNames = {
    f: "Fahrenheit",
    c: "celsius"
}
function toCelsius(Fahrenheit) {
    return(
        (Fahrenheit - 32) * 5/9
    )
    
}
function toFahrenheit(Celsius) {
    return(
        (Celsius * 5/9) + 32
    )
    
}
function tryConvert(temperature,convert,) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return " ";
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000)/ 1000;
    return rounded.toString();
    
}
function TempretureChecker(props){
    if (props.celsius >= 100) {
        return(
            <h1>Water will boil!</h1>
        );
        
    } return (
        <h2> Water will not boil, oops!</h2>
    );
};
class TempretureInput extends React.Component {
    constructor(props) {
        super(props);
        this.props = { 
            temperature: ''
         }
    }
    handleOnchange = (e) => {
        // this.setState({ temperature: e.target.value });
        this.props.onTemperatureChange(e.target.value)
    }
    render() { 
        const temperature = this.props.temperature;
        const scale = this.props.scale
        return (
            <fieldset>
                <legend> Enter temperature {scalesNames[scale]}</legend>
                <input value={temperature} onChange={this.handleOnchange}/>
            </fieldset>
          );
    }
}
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            temperature: '',
            scale: 'c'
         }
    }
    handleCelsiusChange = (temperature) =>{
        this.setState({
            scale: 'c',
            temperature 
        });
    }
    handleFarenheitChange = (temperature) =>{
        this.setState({ 
            scale: 'f',
            temperature 
         });
    }
    render() { 
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;
        return (
            <div>
                <TempretureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TempretureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFarenheitChange}/>
                <TempretureChecker celsius={parseFloat(celsius)}/>
            </div>

          );
    }
}
function Test(props) {
    return(
        <Calculator/>
    )
}
 
export default Test;
 
