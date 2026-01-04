import React from "react";
import "./App.css";
import "./styles/glitch.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FreedomLanding from "./components/landing/FreedomLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FreedomLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
