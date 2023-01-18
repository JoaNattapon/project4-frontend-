import React, {useRef, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import LandingPage from "./components/LandingPage";
import PackageList from "./components/PackageList";

function App() {
  return (
    <BrowserRouter>
      <LandingPage />
      
      <Routes>
        <Route path='/' element={<PackageList />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
