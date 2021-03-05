import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon-logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input type="text" />
          <button>Sign In</button>
        </form>
        <p> 
            By signing-up you agree to Amazon's Conditions of Use & Sales. 
            Please see our Privacy Notice, our Cookies Notice and our Interest-based Ads Notice.
            </p>
            <button> Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
