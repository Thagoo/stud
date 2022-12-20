import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginTab from "./components/Login/LoginTab";
import React, { useState, useEffect } from "react";
import StudyMaterials from "./components/StudyMaterials/StudyMaterialsHome/StudyMaterialsHome";
import Discuss from "./components/Discuss/DiscussHome";
import Chat from "./components/Discuss/Chat";
import io from "socket.io-client";

let loggedInUser = localStorage.getItem("user");

function requireAuth() {
  console.log(loggedInUser);
  if (loggedInUser) {
    loggedInUser = loggedInUser.replace(/^"(.+)"$/, "$1");
    return true;
  }
  return false;
}

function App() {
  const [room, setRoom] = useState("");
  const socket = io.connect("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={requireAuth() ? <Home /> : <LoginTab />}
        />
        <Route
          path="/studymaterials"
          element={requireAuth() ? <StudyMaterials /> : <LoginTab />}
        />

        <Route
          path="/discuss"
          element={
            requireAuth() ? (
              <Discuss
                username={loggedInUser} // Add this
                room={room} // Add this
                setRoom={setRoom} // Add this
                socket={socket} // Add this
              />
            ) : (
              <LoginTab />
            )
          }
        />
        <Route
          path="/chat"
          element={
            requireAuth() ? (
              <Chat username={loggedInUser} socket={socket} room={room} />
            ) : (
              <LoginTab />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
