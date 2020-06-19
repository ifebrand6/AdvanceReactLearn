import React, { useState,useContext } from 'react';
import UserContext from './useContext/UserContext'
export default function Test (props) {
    const user = useContext(UserContext)
    const [title, setTitle] = useState('');
    const [sub_title, setSubTitle] = useState(null)
    const handleOnClick = ()=>{
        function getRandomTitle(arr) {
            let identifier = parseInt(Math.random() * 10 / 2);
            return arr[identifier]
        }
        let list = getRandomTitle(listOfTitle)
        let subTitle = getRandomTitle(listOfTitle)
        setTitle(list);
        setSubTitle(subTitle)
    }
    const listOfTitle = ['happy day', 'i can do it', 'billionaire clube','i am the best coder','last time'];
    return(
        <div>
        <h1>{user.name}</h1>
        <h2>{title}</h2>
        <p>This will give a new sub tile:  {sub_title} text to the page</p>
        <button onClick={handleOnClick}>click me</button>
        </div>
    )
}