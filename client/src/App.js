import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import Contact from "./pages/Contact/Contact";
import SignUpPage from "./pages/Signup/SignUpPage";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
