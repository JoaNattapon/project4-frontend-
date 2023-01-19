import React, {useRef, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import LandingPage from "./components/LandingPage";
import PackageList from "./components/PackageList";
import SignupForm from "./components/SignupForm";
import Introduction from "./components/Introduction";


function App() {
  return (
    <BrowserRouter>
      <LandingPage />
      
      <Routes>
        <Route path='/' element={<Introduction />}/>
        <Route path='/letpackages' element={<PackageList />}/>
        <Route path='/letsignup' element={<SignupForm />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
