import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Link to="#" onClick={() => loginWithRedirect()} className="header-nav-link" >LogIn</Link>
  );
};

export default Login;
