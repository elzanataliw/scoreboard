import { React } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";  
import Game from "./pages/Game";
import FreeThrow from "./pages/FreeThrow";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GameMode" element={<Game />} />
        <Route path="/FreeThrowMode" element={<FreeThrow />} />
      </Routes>
    </div>
  );
}

export default App;