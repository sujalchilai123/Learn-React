import React from "react";
import PropTypes from "prop-types";

function UserGreeting({ isLogged = false, username = "Sir" }) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {username}</h2>
  );
  const loginPrompts = (
    <h2 className="login-prompts">Please Login to Continue</h2>
  );

  return isLogged ? welcomeMessage : loginPrompts;
}

UserGreeting.propTypes = {
  isLogged: PropTypes.bool,
  username: PropTypes.string,
};

export default UserGreeting;
