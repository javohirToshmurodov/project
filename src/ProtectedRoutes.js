import React from "react";
import { Outlet } from "react-router-dom";
import Signup from "./pages/SignUp";
const useAuth = () => {
  const hasToken = localStorage.getItem("accesstoken")
  return hasToken
};
export default function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Signup />;
}
