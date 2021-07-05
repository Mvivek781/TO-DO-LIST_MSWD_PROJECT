import React, { Component, Fragment, useState } from 'react';
import StudentClass from "./student";
import FunctionalComponent from "./functionComponent";
import CustomApp from './customApp'
import GuestUser from './Guest'
import User from './User'

const App = () => {
    const [Logged,setStatus] = useState(false);
    const isLoggedIn = Logged;
    const Login = () => {
        return setStatus(true);
    }
    const Logout = () => {
        return setStatus(false);
    }
    let consumer;
    if(isLoggedIn)
     consumer =  <User clickData={Logout}/>
    else{
        const arr = ["gagan","aman","devanshu","karan"];
     consumer = <GuestUser clickData={Login} list={arr}/>
    }
    return (<div>{consumer}</div>);
    }
export default App;

