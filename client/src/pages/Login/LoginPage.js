import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import "./LoginPage.css"; 
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <NavBar type="login" />
      <main>
        <section id="login-section">
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>

          <div className="box">
          <div className="square" style={{"--i":0}}></div>
          <div className="square" style={{"--i":1}}></div>
          <div className="square" style={{"--i":2}}></div>
          <div className="square" style={{"--i":3}}></div>
          <div className="square" style={{"--i":4}}></div>
 
            <div className="container" id="login-form">
              <div className="form">
                <h2>Login Form</h2>
                <form action="">
                  <div className="inputBox">
                    <input type="text" placeholder="Username" />
                  </div>

                  <div className="inputBox">
                    <input type="password" placeholder="Password" />
                  </div>

                  <div className="inputBox">
                    <input type="submit" value="Login" />
                  </div>

                  <p className="forget">
                    Forget Password ? <a href="#">Click Here</a>
                  </p>
<<<<<<< HEAD
                  <p className="forget">Don't have an account ?  <Link id="signup-toggle" to={{pathname:"/signup"}}>Sign Up</Link></p>
=======
                  {/* <p className="forget">Don't have an account ? <a href="#" id="signup-toggle" onClick="toggleSignup()">Sign Up</a></p> */}
>>>>>>> bd942b452c815db7b601dc0d2425c8ac3798e1c9
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
