import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { NavbarWrapper } from "../../styles";
import CompanyAbout from "../companyAbout";
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate()
  return (
    <NavbarWrapper>
      <nav
        data-aos="fade-down"
        className="navbar navbar-expand-lg navbar-light"
      >
        {location.pathname === "/login" ? null : (
          <div className="container-fluid">
            <h3 onClick={()=>navigate("/")} className="navbar-brand">Каркас</h3>

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
              <ul className="navbar-nav gap-2 align-items-center">
                <li className="nav-item">
                  <NavLink
                    to={"/"}
                    className="nav-link  text-dark"
                    aria-current="page"
                    href="#"
                  >
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item position-relative father">
                  <NavLink
                    to={"/about"}
                    className="nav-link text-dark "
                    href="#"
                  >
                    О компании
                    <ul className="company">
                      <li>
                        <CompanyAbout />
                      </li>
                    </ul>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/colleagues"}
                    className="nav-link text-dark"
                    href="#"
                  >
                    Kоллеги
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/projects"}
                    className="nav-link text-dark"
                    href="#"
                  >
                    Проекты
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/products"}
                    className="nav-link text-dark"
                    href="#"
                  >
                    Продукты
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"contact"}
                    className="nav-link  text-dark"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Контакт
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </NavbarWrapper>
  );
}
