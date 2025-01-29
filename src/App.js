// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Main from "./pages/Main";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Connect from "./pages/Connect";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Set the Main page to the root route */}
        <Route path="/" element={<Main />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Router>
  );
}

export default App;
