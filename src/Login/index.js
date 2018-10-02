import React, { Component } from "react";
import "../style.css";

class Login extends Component {
  render() {
    return (
    
      <div class="loginregisterdiv">
      <div class="logindiv">
        <h2>Sign In</h2>
        <form class="loginform" action="/login" method="POST">
          <div>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div>
            <input type="text" name="password" placeholder="password" />
          </div>
          <div class="submitdiv">
            <button>Login</button>
          </div>
        </form>
      </div>

      <div class="registerdiv">
        <h2>Register</h2>

        <form class="registerform" action="/register" method="POST">
          <div>
            <input type="text" name="name" placeholder="name" />
          </div>
          <div>
            <input type="email" name="email" placeholder="email" />
          </div>
          <div>
            <input type="text" name="password" placeholder="password" />
          </div>
          <div class="submitdiv">
            <button>Register</button>
          </div>
        </form>

      </div>
      <div>
      </div>
    </div>
  
    )
  }
}

export default Login;