import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    error,
    processLogin,
    email,
    password,
    handleError,
    user,
    setIsLoading,
  } = useAuth();
  let history = useHistory();
  let location = useLocation();
  let redirect_uri = location.state?.from || "/home";
  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleEmailPassLogin = (e) => {
    e.preventDefault();
    console.log(user);
    handleError();
    processLogin(email, password);
    if (user?.email) {
      history.push(redirect_uri);
    }
  };
  return (
    <div>
      <form
        className=" row g-3 mt-3 container w-75 mx-auto"
        onSubmit={handleEmailPassLogin}
      >
        <h3>Please Login</h3>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            onBlur={handleEmailChange}
            type="email"
            className="form-control"
            id="inputEmail4"
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            onBlur={handlePasswordChange}
            type="password"
            className="form-control"
            id="inputPassword4"
            required
            autoComplete="on"
          />
        </div>

        <div>{error}</div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p>
            new user? <Link to="/register">Register</Link>{" "}
          </p>
          <div>-----------or-----------</div>
          <Button onClick={handleGoogleSignIn} variant="warning">
            Google Sign In
          </Button>
        </div>
      </form>{" "}
    </div>
  );
};

export default Login;
