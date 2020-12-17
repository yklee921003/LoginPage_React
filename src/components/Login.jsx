import React from "react";
import Input from "./Input";

var isLoggedIn = false;

function Login() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="text" placeholder="password" />
      {isLoggedIn ? null : <Input type="text" placeholder="confirm password" />}
      <button type="submit">{isLoggedIn ? "Login" : "Register"}</button>
    </form>
  );
}

export default Login;
