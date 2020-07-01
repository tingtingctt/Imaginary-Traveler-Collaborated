import React from "react";
// import "./style.css";
import Axios from "axios";


class Login extends React.Component {

  state = {
    email: "",
    password: ""
  }

  handleSubmitClick = (event) => {
    event.preventDefault();
    var userData = {
      email: this.state.email,
      password: this.state.password
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    this.loginUser(userData.email, userData.password);
    this.setState({email: ""});
    this.setState({password: ""});
  };

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  loginUser(email, password) {
    Axios.post("auth/login", {
      email: email,
      password: password
    })
      .then(function() {
        window.location.replace("/books");
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  handleChange = (event) => {
    if(event.target.type === "email"){
      this.setState({email: event.target.value});
    }
    else if(event.target.type === "password"){
      this.setState({password: event.target.value});
    }
    else {
      console.log("How did you do that?")
    }
  }

  render() {

    return (  
      <div className="container">
        <div className="row" style={{position: "fixed", top: "30%", left: "38%", width: "400px", backgroundColor: "hsla(60, 20%, 99%, 0.8)"}}>
          <div className="col-md-12" >
              <h2>Login Form</h2>
                <form className="login">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="email-input" placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="password-input" placeholder="Password"/>
                  </div>
                  <button onClick={this.handleSubmitClick} type="submit" className="btn btn-default">Login</button>
                </form>
                <br />
                <p>Or sign up <a href="/signup">here</a></p>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;


