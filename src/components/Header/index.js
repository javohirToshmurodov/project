import React from "react";
import {  NavLink, useLocation } from "react-router-dom";
import { NavbarWrapper } from "../../styles";
export default function Header() {
  const location = useLocation();
  return (
    <NavbarWrapper>
      <nav data-aos="fade-down" className="navbar navbar-expand-lg navbar-light   ps-4 pe-4">
        {location.pathname === "/login" ? null : (
          <div className="container-fluid">
            <h3 className="navbar-brand text-white" >
              Karkaz
            </h3>

            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end "
              id="navbarNav"
            >
              <ul className="navbar-nav gap-4 align-items-center">
                <li className="nav-item">
                  <NavLink
                    to={"/"}
                    className="nav-link  text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/about"}
                    className="nav-link text-white"
                    href="#"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/colleagues"}
                    className="nav-link text-white"
                    href="#"
                  >
                    Colleagues
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/projects"}
                    className="nav-link text-white"
                    href="#"
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"contact"}
                    className="nav-link  text-white"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Contact
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                <button className="btn btn-success p-1 ps-2 pe-2">
                  <NavLink
                    to={"signup"}
                    className="nav-link text-white"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                   Login
                  </NavLink>
                </button>
              </li> */}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </NavbarWrapper>
  );
}
