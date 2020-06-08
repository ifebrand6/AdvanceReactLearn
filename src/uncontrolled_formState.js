
import React from 'react'

export default class Test extends React.Component {
    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    handleSubmit = (formEvent) =>{  
        alert(`Data submited: ${
            this.input.map(element => {
                return element.value
            })
        }`);
        console.log(
            this.input.forEach(element => {
                console.log(element.value)
            })
        );
        formEvent.preventDefault();
    }

    render() {
        this.input = []
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="Name">
                        Name:
                        <input type="text" name="name"defaultValue="Enter your name" ref={(name) => {this.input.push(name)}}/>
                    </label>
                    <p>
                    <label htmlFor="address">
                        address:
                        <input type="text"  ref={(input) => {this.input.push(input)}}/>
                    </label>
                    </p>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
