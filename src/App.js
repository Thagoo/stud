import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import LogModal from "./components/Home/LogModal";
import RegModal from "./components/Home/RegModal";
import React, { useState, useEffect } from "react";

function requireAuth() {
  const loggedInUser = localStorage.getItem("user");
  console.log(loggedInUser);
  if (loggedInUser) {
    return true;
  }
  return false;
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={requireAuth() ? <Home /> : <LogModal />}
        />

        <Route path="/register" element={<RegModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
