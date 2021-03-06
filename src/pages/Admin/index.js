import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCartShopping,
  faListAlt,
  faPhone,
  faTableCellsLarge,
  faTableList,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from "../../styles";

export default function Admin() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");
  return (
    <div className="row mt-3 justify-content-between">
      <div className="col-xl-2 col-lg-2 col-sm-4 col-12">
        <Sidebar className="pt-4">
          <p className="text-dark fw-bold ps-3">Панель администратора</p>

          <ul>
            <li className="menuItem py-3 d-flex ">
              <FontAwesomeIcon icon={faBars} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/category"
              >
                Категория
              </NavLink>
            </li>
            <li className="menuItem py-3 d-flex ">
              <FontAwesomeIcon icon={faCartShopping} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/product"
              >
                Продукт
              </NavLink>
            </li>
            <li className="menuItem py-3 d-flex ">
              <FontAwesomeIcon icon={faListAlt} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/project"
              >
                Проект
              </NavLink>
            </li>
            <li className="menuItem py-3 d-flex ">
              <FontAwesomeIcon icon={faUser} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/colleges"
              >
                Коллега
              </NavLink>
            </li>

            <li className="menuItem py-3 d-flex ">
              <FontAwesomeIcon icon={faPhone} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/contacts"
              >
                Контакты
              </NavLink>
            </li>
            <li className="menuItem py-3 d-flex ">
              <FontAwesomeIcon icon={faTableCellsLarge} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/categorytable"
              >
                Таблица категорий
              </NavLink>
            </li>
            <li className="menuItem py-3 d-flex ">
              <FontAwesomeIcon icon={faTableList} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/producttable"
              >
                Tаблица продуктов
              </NavLink>
            </li>
            <li className="menuItem py-3 d-flex ">
              <FontAwesomeIcon icon={faUsers} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/colleaguestable"
              >
                Таблица коллег
              </NavLink>
            </li>
            <li className="menuItem py-3 d-flex ">
              <FontAwesomeIcon icon={faTableList} />
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--bs-yellow)" : "black",
                })}
                to="/admin/projectstable"
              >
                Таблица проектов
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
