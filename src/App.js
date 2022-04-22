import React from "react";
import Header from "./components/Header";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import About from "./pages/About";
import Colleagues from "./pages/Colleagues";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
import { Container } from "./styles";
import Products from "./pages/Products";
import Signup from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useNavigate } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Product from "./pages/Admin/Product";
import Category from "./pages/Admin/Category";
import Colleges from "./pages/Admin/Colleges";
import Project from "./pages/Admin/Projects";
import Contacts from "./pages/Admin/Contacts";
import ProductTable from "./pages/Admin/ProductTable";
import AboutCreator from "./pages/AboutCreator";
export default function App() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="aboutcreator" element={<AboutCreator />} />
        <Route path="products" element={<Products />} />
        <Route path="colleagues" element={<Colleagues />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="projects" element={<Projects />} />
        <Route path="login" element={<Signup />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="admin" element={<Admin />}>
          <Route path="product" element={<Product />} />
          <Route path="category" element={<Category />} />
          <Route path="colleges" element={<Colleges />} />
          <Route path="project" element={<Project />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="producttable" element={<ProductTable />} />
        </Route>
      </Routes>
    </Container>
  );
}
