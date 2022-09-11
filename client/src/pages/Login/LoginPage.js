import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import "./LoginPage.css"; 
function LoginPage() {
  return (
    <div>
      <NavBar type="login" />
      <main>
        <section>
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
                  {/* <p className="forget">Don't have an account ? <a href="#" id="signup-toggle" onClick="toggleSignup()">Sign Up</a></p> */}
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
