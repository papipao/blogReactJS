import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/blog/topbar/TopBar";
import Home from "./components/pages/home/Home";
import "./app.css";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<Home />} />
        <Route exact path="/register" element={currentUser ? <Home /> : <Register />} />
        <Route exact path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route exact path="/post/:id" element={<Single />} />
        <Route exact path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route exact path="/settings" element={currentUser ? <Settings /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
