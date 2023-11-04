import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="profile-container">

        <img className="" width="50"src={user.picture} alt={user.name} />
      </div>
    )
  );
};

export default Profile;