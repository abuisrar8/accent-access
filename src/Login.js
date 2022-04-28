import React, { useState } from "react";
import Main from "./Main";
import "./LogIn.css";
import GoogleLogin from 'react-google-login';
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

function LogIn() {
  const [state, setState] = useState(false);
  const response =() => {
    setState(true);
  }
  const signInWithGoogle =() => {
    signInWithPopup(auth,provider)
    .then((res)=>{

        setState(true);
    })
    .catch((error)=>{console.log(error);
    });
};
  return (
    <div className="Login">
      
      {state ?  <Main /> : (
        <div className="LoginPage">
          <h1>Welcome</h1>
          <h2>Please Log in By clicking the Log in Button </h2>

          <button onClick={signInWithGoogle}>Log In</button>
          {/* <div className="signin">
          <GoogleLogin
            clientId="984245244691-9h595ughd43incve5578o6lum8nnmcck.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={response}
           
            cookiePolicy={'single_host_origin'}
          />
          </div> */}
        </div>
      )}
      
    </div>
  );
}
export default LogIn;
