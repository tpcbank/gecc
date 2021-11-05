import "./App.css";
import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar.component";
import Login from "./Screen/Auth/Login.screen";

function App() {
  const [umg_user, setumg_user] = useState("");

  const callbackUsername = (umg_user) => {
    setumg_user(umg_user);
  };

  return (
    <div className="App">
      {umg_user === "" || umg_user === undefined ? (
        <Login callbackUsername={callbackUsername} />
      ) : (
        <Navbar umg_user={umg_user} />
      )}
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
