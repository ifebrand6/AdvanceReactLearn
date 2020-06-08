// import React from 'react';
import React, { Component } from 'react'

function FancyBorder(props) {
    return(
        <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
        </div>
    )
}
function Dialog(props) {
    return(
        <FancyBorder color="red">
            <h1>  {props.title}</h1>
             <p>{props.body}</p>
             <p> {props.children}</p>
        </FancyBorder>
    );
}
function WelcomeDialog() {
    return (
      
        <FancyBorder color="blue">
        <h1 className="Dialog-title">
            Welcome
        </h1>
        <p className="Dialog-message">
            Thank you for visiting our spacecraft!
        </p>
        </FancyBorder>
       
    );
    }
    class SignIn extends Component {
        constructor(props) {
            super(props);
            this.state = {login: ''  }
        }
        handleOnChange = (e)=> {
            this.setState({ login: e.target.value });
        }
        handleOnClick = (e) => {
            alert(`welcome ${this.state.login}`);
            console.log("hiy me")
            // e.preventDefault()
        }
        render() { 
            const login = this.state.login
            return (
               
                    <Dialog title="This is class title" body="normalized coding always">
                        <input value={login} onChange={this.handleOnChange} />
                        <button  onClick={this.handleOnClick}>Hit me!</button>
                    </Dialog>
            
               
              );
        }
    }
     
    
    function Test(props) {
        return(
            <div>
               
               <SignIn/>
            </div>
        );
    }


    export default Test;