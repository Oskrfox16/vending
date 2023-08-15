import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Snickers from "./Snickers";
import Coke from "./Coke";
import MandMs from "./MandMs";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
          <Route path="/coke" element={<Coke/>} />
          <Route path="/MandMs" element={<MandMs/>} />
          <Route path="/snickers" element={<Snickers/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;


