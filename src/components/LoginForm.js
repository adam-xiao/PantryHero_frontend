import React from 'react'
import { Router } from "react-router-dom";

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(response => {
      //set user to state
      //redirect!
      if (response.errors){
        alert(response.errors)
      } else {
        this.props.setUser(response)
      }
    })

  }

  render(){
    return (
      <div className="center-form">
        Sign in
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input name="username" value={this.state.username} onChange={this.handleChange}placeholder="username"/>
          <input name="password" value={this.state.password} type="password"  onChange={this.handleChange}placeholder="password"/>
          <button className="login" type="submit">Log In</button>
        </form>
        <br></br>
        <div onClick={()=> this.props.history.push("/signup")}>No Account? Sign up</div>
      </div>
    )
  }
  
}

export default LoginForm