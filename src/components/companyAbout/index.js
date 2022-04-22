import React from "react";
import { NavLink } from "react-router-dom";
import { CompanyAboutWrapper } from "../../styles";

export default function CompanyAbout() {
  return (
    <CompanyAboutWrapper>
          <NavLink
            to={"/aboutcreator"}
            className="nav-link  text-white"
            aria-current="page"
            href="#"
          >
            Приветственное слово руководителя компании
          </NavLink>
    </CompanyAboutWrapper>
  );
}
