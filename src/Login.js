import React, { useState } from "react";
import Main from "./Main";
import "./LogIn.css";
import GoogleLogin from 'react-google-login';

function LogIn() {
  const [state, setState] = useState(false);
  const response =() => {
    setState(true);
  }
  return (
    <div className="Login">
      
      {state ?  <Main /> : (
        <div className="LoginPage">
          <h1>Welcome</h1>
          <h2>Please Log in By clicking the Log in Button </h2>

           {/*<button onClick={() => setState(true)}>Log In</button> */}
          <div className="signin">
          <GoogleLogin
            clientId="984245244691-9h595ughd43incve5578o6lum8nnmcck.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={response}
//             onFailure={response}
            cookiePolicy={'single_host_origin'}
          />
          </div>
        </div>
      )}
      
    </div>
  );
}
export default LogIn;
