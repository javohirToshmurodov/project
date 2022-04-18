import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Colleagues from "./pages/Colleagues";
import Contact from "./pages/ContactUs";
import Projects from "./pages/Projects";
import { Container } from "./styles";
import Products from "./pages/Products";
import Signup from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
export default function App() {
  // const navigate = useNavigate();
  // const [loader, setLoader] = useState(false);
  // const [isSignIn, setIsSignIn] = useState(true);
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/colleagues" element={<Colleagues />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Container>
  );
}
