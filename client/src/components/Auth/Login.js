import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div>
      <div className="container login-cont bg-light rounded border border-dark">
        <div className="logincard rounded ">
          <h2 className="fw-bold">Login</h2>
          <form>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email </label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
          </form>
          <button className="btn btn-success mt-3 loginbtn">Log in</button>
          <button className="btn btn-success mt-3 loginbtn">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
