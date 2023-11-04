import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  
  return <Link to="#" onClick={() => logout()} className="header-nav-link">Logout</Link>;
};

export default LogoutButton;