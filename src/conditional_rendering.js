import React from 'react';

const UserInfo = ()=> {
    return(
        <h1>Welcome!</h1>
    )
}
function Guest(){
    return(
        <h3>Please Sign up</h3>
    );
}
function Greeting(props) {
    if (props.isLogged ) {
        return(
            <UserInfo/>
        )
        
    } else return (
        <div>
            <Guest/>

        </div>
    );    
    
}
function Messages(props){
    const message = props.messages
    return(
        <div>
        {
            message.length > 0 &&
            <h1>you have {message.length} now.</h1>
        }
        </div>
    )
}
function SwitchAbleComponent(props) {
    if (!props.switchOn) {
        return null;
    }
    return(
        <h1>The Props' element is not empty</h1>
    )
}

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLogged: false,
            switchOn: true
        };
        // this.state = {switchOn: true}
        // this.handleLogin = this.handleLogin
    }
    handleLogin = ()=> {
        console.log("login attempt!")
        this.setState(state =>({isLogged: true}));
    }
    handleLogOut = ()=> {
        console.log("Log out attempt!")
        this.setState({isLogged: false})
    }
    handleAutoSwitch = ()=> {
        console.log("the switch has been fire!");
        this.setState(state =>({switchOn: !state.switchOn}));
    }
    handleSwitchOff = ()=> {
        console.log("attempting to off the switch >>>>>>>>>>>>> ");
        this.setState({switchOn: false}) 
        console.log("Success !!! ");

    }
    render(){
        const messages = ["dsd"];
        const isLogged = this.state.isLogged
        const switchOn = this.state.switchOn
        let button;
        let switchDiv;
        if (isLogged) {
            button = <button onClick={this.handleLogOut}>
               Log Out
            </button>
            
        } else {
            button = <button onClick={this.handleLogin}>
                Log In
            </button>
        }
        if (switchOn) {
            switchDiv = <button onClick={this.handleSwitchOff}>
           switch Off
        </button>
            
        } else {
            switchDiv =  <button onClick={this.handleAutoSwitch}>
            Switch on
        </button>
        }
        return(
            <div>
                <Greeting isLogged={isLogged} />
                <br/>
                {button}
                <Messages messages={messages}/>
                <br/>
                <SwitchAbleComponent switchOn={switchOn}/>
                <br/>
                <p>Component switch
                {/* I use switchDiv to test the different betw "using state fxn ...setState(state =>({key: state.value}));" */
                 /* and changing the state directly with ...setState({key: value.}) 
                    with this I deduce ...setState(state =>({key: state.value})); changes the initialize state.
                    while  ...setState({key: value.} assign a new value of the state.
                 */
                }
                {/* {switchDiv} */}
                <button onClick={this.handleAutoSwitch}>
                        Switch 
                    </button>
                   </p>
            </div>
           
        );
    
    }
}
export default Test;