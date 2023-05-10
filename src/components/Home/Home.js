import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home(props) {
  return (
    <div className="main">
      <div>
        <h1>Hello World</h1>

        <h2>
          {props.name
            ? `Welcome - ${props.name} You Are Logged In Successfully`
            : "Login please"}
        </h2>

        <div className="pages">
          <h3>
            <Link className="loginpage" to="/login">
              Go To Login Page
            </Link>
          </h3>
          <br />
          <h3>
            <Link className="signuppage" to="/signup">
              Go To Signup Page
            </Link>
          </h3>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
