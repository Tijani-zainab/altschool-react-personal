import React from "react";


function UserProfile(props) {
  return (
    <div className="avater">

      <h1>Ms Minnie</h1>
      <img src={props.image} alt="avater" />
    </div>
  );
}

export default UserProfile;