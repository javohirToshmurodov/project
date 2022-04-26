import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCartShopping,
  faListAlt,
  faPhone,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from "../../styles";

export default function Admin() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");
  return (
    <div className="row mt-3   justify-content-between">
      <div className="col-xl-2 col-lg-2 col-sm-4 col-12">
        <Sidebar className="pt-4">
          <p
            className="text-dark fw-bold ps-3"
            data-aos="fade-down"
            data-aos-duration="1400"
          >12
            Dashboard
          </p>

          <ul>
            <li
              data-aos="fade-right"
              data-aos-duration="800"
              className="menuItem py-3 d-flex "
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/product"
              >
                Products
              </NavLink>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1000"
              className="menuItem py-3 d-flex "
            >
              <FontAwesomeIcon icon={faListAlt} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/project"
              >
                Projects
              </NavLink>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              className="menuItem py-3 d-flex "
            >
              <FontAwesomeIcon icon={faUser} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/colleges"
              >
                Colleagues
              </NavLink>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1400"
              className="menuItem py-3 d-flex "
            >
              <FontAwesomeIcon icon={faBars} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/category"
              >
                Category
              </NavLink>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1600"
              className="menuItem py-3 d-flex "
            >
              <FontAwesomeIcon icon={faPhone} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/contacts"
              >
                Contacts
              </NavLink>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1800"
              className="menuItem py-3 d-flex "
            >
              <FontAwesomeIcon icon={faTableList} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/producttable"
              >
                ProductTable
              </NavLink>
            </li>
          </ul>
        </Sidebar>
      </div>
      <div className="col-xl-9 col-lg-9 col-md-8  col-12 backgroundColor">
        <Outlet />
      </div>
    </div>
  );
}
