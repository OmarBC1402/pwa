import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile2 = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="profile-container">
        <h3 className="text-center">{user.name} </h3>
      </div>
    )
  );
};

export default Profile2;