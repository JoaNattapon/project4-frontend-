import React, {useRef, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <LandingPage />
      
      <Routes>
        <Route />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
