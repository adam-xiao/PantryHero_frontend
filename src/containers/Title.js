import React, { Component } from 'react';

function Title (props) {
return(
    <div id="title">
        <h1 className="titleText">Welcome to</h1>
        <h1 className="titleText">PANTRY HERO</h1>
        <button onClick={()=>props.history.push("/login")} className="btn btn-primary btn-lg">Get Started</button>
    </div>
)
}

export default Title
