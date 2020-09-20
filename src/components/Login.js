import React from "react";
import "./Login.css";
import { loginUrl } from "../spotify_config";

function Login() {
  return (
    <div className="login">
      <img
        src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png"
        alt=""
      />
      <a href={loginUrl}>
        <button>LOGIN WITH SPOTIFY</button>
      </a>
    </div>
  );
}

export default Login;
