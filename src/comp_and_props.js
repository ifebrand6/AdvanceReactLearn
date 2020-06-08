import React from 'react'


// function Test(props) {
//     return(
//         <h1>this is a fxn comp</h1>
//     )
    
// };
// class Test extends React.Component{
//     render(){
//         return <h1>this is a class comp</h1>
//     }
// }

// Welcome comp
// class Welcome extends React.Component{
//     render(){
//         return <h1>Welcome {this.props.name}</h1>
//     }
// };

// // element comp
// const element = <Welcome name="Test Name"/>
function Comment(props) {
    function UserInfo(props) {
        
    }
    function Avatar(props) {
        return  <img className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
        />
    }
    function Text(props) {
       return <div className="Comment-text">
            {props.text}
        </div>
    }
    function Date(props) {
        return <div className="Comment-date">
        {props.date}
    </div>
    }
    return <div className="Comment">

     
        <Date/>
    </div>
}

// fxn that is being displayed
function Test(props) {
    return (
       <Comment/>
    );
    }
export default Test;