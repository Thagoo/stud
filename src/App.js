import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginTab from "./components/Login/LoginTab";
import React, { useState, useEffect } from "react";
import StudyMaterials from "./components/StudyMaterials/StudyMaterialsHome";
import Chat from "./components/Discuss/Chat";
import io from "socket.io-client";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import "product-sans-webfont";
let loggedInUser = localStorage.getItem("user");

function requireAuth() {
  if (loggedInUser) {
    loggedInUser = loggedInUser.replace(/^"(.+)"$/, "$1");
    return true;
  }
  return false;
}

function App() {
  const [room, setRoom] = useState("");

  // Material UI dark mode toggle
  const [toggleDark, settoggleDark] = useState(false);

  const myTheme = createTheme({
    // Theme settings

    palette: {
      type: toggleDark ? "dark" : "light",
    },
  });

  const socket = io.connect();
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={myTheme}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                requireAuth() ? (
                  <Home
                    username={loggedInUser}
                    socket={socket}
                    room={room}
                    setRoom={setRoom}
                  />
                ) : (
                  <LoginTab />
                )
              }
            />
            <Route
              path="/studymaterials"
              element={
                requireAuth() ? (
                  <StudyMaterials
                    username={loggedInUser}
                    socket={socket}
                    room={room}
                    setRoom={setRoom}
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
                  <Chat
                    toggleDark={toggleDark}
                    settoggleDark={settoggleDark}
                    username={loggedInUser}
                    socket={socket}
                    room={room}
                  />
                ) : (
                  <LoginTab />
                )
              }
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
