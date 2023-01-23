import React, {useRef, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import LandingPage from "./components/LandingPage";
import PackageList from "./components/PackageList";
import SignupForm from "./components/SignupForm";
import Introduction from "./components/Introduction";
import FooterPage from "./components/FooterPage";
import Profile from "./components/Profile";


function App() {
  return (
    <BrowserRouter>

      <LandingPage />
      
      <Routes>
        <Route path='/' element={<Introduction />}/>
        <Route path='/letpackages' element={<PackageList />}/>
        <Route path='/letsignup' element={<SignupForm />}/>
        <Route path='/profile/:id' element={<Profile />} />

      </Routes>
      <FooterPage />
      
    </BrowserRouter>
  );
}

export default App;
