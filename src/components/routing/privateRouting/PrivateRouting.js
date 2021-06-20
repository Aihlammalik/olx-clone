import React from 'react';
import {Route , Redirect} from 'react-router-dom'

export default function privaterouting({children ,auth , ...rest}) {
    return (
        <Route {...rest} render={()=> auth? children: <Redirect to={"/login"}/>}/>
    )
}

