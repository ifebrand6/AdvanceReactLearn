import React from 'react';
// import ReactDOM from 'react-dom'





// function tick() {
//     ReactDOM.render(
//         <Test/>,
//         document.getElementById('root')
//     );
//     }
    

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(()=> this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render(){
        return(
        <div>
            <h1>This is a clock</h1>
            <h2>Time is {this.state.date.toLocaleTimeString()} </h2>
        </div>
        );
    }    
}

// function Test(props) {
//    return <h1>this is a ticking {props.date.toLocaleTimeString()} </h1> 
// }

// setInterval(tick,1000)

export default Test;