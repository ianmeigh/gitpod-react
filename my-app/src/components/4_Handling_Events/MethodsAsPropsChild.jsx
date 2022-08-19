// NOTE: BAD EXAMPLE AS IF THIS WERE A REAL WORLD EXAMPLE
//       THE CHILD COMPONENT SHOULD BE MADE STATEFUL SO
//       IT WOULD BE INDEPENDENT OF THE PARENT

import React from "react";

function MethodsAsPropsChild(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          <p>Welcome to the site! Please complete the steps below:</p>
          <ol>
            <li>Confirm your email</li>
            <li>Complete your profile</li>
            <li>Subscribe to the newsletter</li>
          </ol>
          {/* <button onClick={props.handleSignOut}>Sign out</button> */}
          <button onClick={props.toggleIsLoggedIn}>Sign out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in</p>
          {/* <button onClick={props.handleSignIn}>Sign in</button> */}
          <button onClick={props.toggleIsLoggedIn}>Sign in</button>
        </div>
      )}
    </div>
  );
}

export default MethodsAsPropsChild;
