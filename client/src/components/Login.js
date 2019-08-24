import React, { useState } from "react";
import axios from "axios"; 

class Login extends React.Component {
  state = {
    loginInfo: {
      username: "", 
      password: ""
    }
  }
  // make a post request to retrieve a token from the api
 loginCall = event => {
    event.preventDefault(); 
        axios
        .post("http://localhost:5000/api/login", this.state.loginInfo) 
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload)
            this.props.history.push("/protected")
        })
        .catch(error => {
            console.log("ERROR", error)
        }, []);     
    }

  // when you have handled the token, navigate to the BubblePage route

 handleChange = event => {
   this.setState({
     loginInfo: {
       ...this.state.loginInfo,
       [event.target.name]: event.target.value
     }
   })
  }; 

render() {
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={this.loginCall}> 
                <input 
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.loginInfo.username}
                    onChange={this.handleChange}
                /> 
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.loginInfo.password}
                    onChange={this.handleChange}
                />
                <button> Sign In </button> 
     </form> 
     </>
    );
  }
};

export default Login;
