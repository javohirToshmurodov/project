import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from "../../styles";

export default function Admin() {
  // const [isActive, setiSActive] = useState()
  const setActive = ({isActive})=> isActive ? 'active-link' : ''
  return (
    <div className="row mt-3  justify-content-between">
      <div className="col-xl-2 col-lg-2 col-md- col-sm-4 col-12">
        <Sidebar className="pt-4">
          <p className="text-white fw-bold text-center" data-aos="fade-down" data-aos-duration="1400">Dashboard</p>

          <ul>
            <li data-aos="fade-right" data-aos-duration="800" className="menuItem py-3   mb-2 d-flex justify-content-center">
              <NavLink style={({isActive})=>({color: isActive ? 'var(--bs-yellow)' : 'white'})} to="/admin/product">
                Products
              </NavLink>
            </li>
            <li data-aos="fade-right" data-aos-duration="1000" className="menuItem py-3   mb-2 d-flex justify-content-center">
              <NavLink style={({isActive})=>({color: isActive ? 'var(--bs-yellow)' : 'white'})}  to="/admin/project">
                Projects
              </NavLink>
            </li>
            <li data-aos="fade-right" data-aos-duration="1200" className="menuItem py-3   mb-2 d-flex justify-content-center">
              <NavLink style={({isActive})=>({color: isActive ? 'var(--bs-yellow)' : 'white'})}  to="/admin/colleges">
                Colleagues
              </NavLink>
            </li>
            <li data-aos="fade-right" data-aos-duration="1400" className="menuItem py-3   mb-2 d-flex justify-content-center">
              <NavLink style={({isActive})=>({color: isActive ? 'var(--bs-yellow)' : 'white'})}  to="/admin/category">
                Category
              </NavLink>
            </li>
            <li data-aos="fade-right" data-aos-duration="1600" className="menuItem py-3   mb-2 d-flex justify-content-center">
              <NavLink style={({isActive})=>({color: isActive ? 'var(--bs-yellow)' : 'white'})}  to="/admin/contacts">
                Contacts
              </NavLink>
            </li>
            <li data-aos="fade-right" data-aos-duration="1800" className="menuItem py-3   mb-2 d-flex justify-content-center">
              <NavLink style={({isActive})=>({color: isActive ? 'var(--bs-yellow)' : 'white'})}  to="/admin/producttable">
                ProductTable
              </NavLink>
            </li>
          </ul>
        </Sidebar>
      </div>
      <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-12">
        <Outlet />
      </div>
    </div>
  );
}
