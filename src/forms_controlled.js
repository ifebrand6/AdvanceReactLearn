import React from 'react';
import UserContext, { UserConsumer } from './useContext/UserContext';

class FormControlled extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            textArea: { value: "enter your ideas "},
            value: '',
            select:{ value: "Coconut    "}
        };
    }
    static contextType = UserContext;
    componentDidMount(){
        const user = this.context
        console.log(user)
    }
    handleOnchange = (e, value) => {
        console.log(e.target.value);
        this.setState({value: e.target.value})
    }
    handleOnchangeForText = (e, value) => {
        console.log(e.target.value);
        this.setState({textArea: e.target.value})
    }
    handleOnchangeForSelect = (e) => {
        console.log(e.target.value);
        this.setState({select: e.target.value})
    }
    handleOnSubmit = (e) => {
        alert(` submitted ${this.state.value} ++ ${this.state.textArea} `)
        e.preventDefault()

    }
    handleAnon = (e) => {
        console.log("text box clicked");
        // this.setState(e.target.value = "")
        e.target.value = "";
        // e.target.removeEventListener("click", handleAnon);
        // console.log("oppd")S
    }
   
    render(){
        const user = this.context
    return(
        <UserConsumer>
        {props => {
            return   <div>
        <p>{props.name}</p>
        <p>{user.loggedIn}</p>
        <form onSubmit={this.handleOnSubmit} >
            <label htmlFor="Name">
                Name:
                <input type="text" name="name"  value={this.state.value} onChange={this.handleOnchange}/>
            </label>
            <p>
            <label htmlFor="Essay">
                Body:
                <textarea name="essay" value={this.state.textArea.value} cols="30" rows="10"  onChange={this.handleOnchangeForText} onClick={this.handleAnon}>

                </textarea>
            </label>
            </p>
            <p>
                <select name="fruits" value={this.state.select.value} onChange={this.handleOnchangeForSelect} >
                    <option value="Apple">Apple</option>
                    <option value="Coconut">Coconut</option>
                    <option value="Orange">Orange</option>
                    <option value="Pawpaw">Pawpaw</option>
                </select>
            </p>
            <input type="submit" />
        </form>
        <br/>
        </div>
    }}
        </UserConsumer>
    )
    
}
}
export default FormControlled;