import React from "react";
import { getCookie} from './cookies'
import {
  Redirect,
} from "react-router-dom";


const PrivateRoute = ({component: Component, ...rest}) => {
    const userObj = JSON.parse(getCookie('userObj'))
    console.log(userObj)
    if(userObj && userObj.token && userObj.userId) {
        return <Component {...rest}/>
    }
    return <Redirect to="/login"/>
  }
  

export default PrivateRoute