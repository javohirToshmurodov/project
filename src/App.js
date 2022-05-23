import React, { useEffect } from "react";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Colleagues from "./pages/Colleagues";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
import { Container } from "./styles";
import Products from "./pages/Products";
import Signup from "./pages/SignUp";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Product from "./pages/Admin/Product";
import Category from "./pages/Admin/Category";
import Colleges from "./pages/Admin/Colleges";
import Project from "./pages/Admin/Projects";
import Contacts from "./pages/Admin/Contacts";
import ProductTable from "./pages/Admin/ProductTable";
import AboutCreator from "./pages/AboutCreator";
import Mission from "./pages/Mission";
import { useDispatch } from "react-redux";
import {
  loadCategories,
  loadColleges,
  loadProducts,
  loadProjects,
} from "./redux/actions";
import ColleaguesTable from "./pages/Admin/ColleaguesTable";
import Loader from "./components/Loader";
import ProjectsTable from "./pages/Admin/ProjectsTable";
import ProtectedRoutes from "./ProtectedRoutes";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadColleges());
    dispatch(loadCategories());
    dispatch(loadProjects());
  }, []);

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
        <Route path="mission" element={<Mission />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="projects" element={<Projects />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="login" element={<Signup />} />
          <Route path="admin" element={<Admin />}>
            <Route path="product" element={<Product />} />
            <Route path="category" element={<Category />} />
            <Route path="colleges" element={<Colleges />} />
            <Route path="project" element={<Project />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="producttable" element={<ProductTable />} />
            <Route path="colleaguestable" element={<ColleaguesTable />} />
            <Route path="projectstable" element={<ProjectsTable />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}
