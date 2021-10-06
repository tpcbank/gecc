import "./App.css";
import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar.component";
import Login from "./Screen/Auth/Login.screen";

function App() {
  const [username, setUsername] = useState("");

  const callbackUsername = (username) => {
    setUsername(username);
  };

  return (
    <div className="App">
      {username == "" || username == undefined ? (
        <Login callbackUsername={callbackUsername} />
      ) : (
        <Navbar />
      )}
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
