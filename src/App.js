import React, { useState } from "react";

import MusicAppBar from "./components/MusicAppBar";
import SignIn from "./components/SignIn";
import MusicDashboard from "./components/MusicDashboard";

import "./App.css";

export default function App() {
  const [loggedIn, setLogin] = useState(false);

  const handleLogin = () => {
    loggedIn ? setLogin(false) : setLogin(true);
  };

  return (
    <div>
      <MusicAppBar loggedIn={loggedIn} handleLogin={handleLogin}></MusicAppBar>
      <div className="App-login">
        {loggedIn ? (
          <MusicDashboard></MusicDashboard>
        ) : (
          <SignIn handleLogin={handleLogin}></SignIn>
        )}
      </div>
    </div>
  );
}
