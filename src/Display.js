import React from 'react'
import Test from './Test'
import {UserProvider} from './useContext/UserContext'
export default function Display(props) {
    const user = 
    {name: 'test',
    loggedIn: true
}
    return (
        <UserProvider value={user}>
        <Test/>
        </UserProvider> 
    )
};