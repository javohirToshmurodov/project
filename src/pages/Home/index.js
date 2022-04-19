import React from "react";
import { HomeWrapper } from "../../styles";
import OwnerPng from "../../assets/owner.png";
export default function Home() {
  return (
    <HomeWrapper className="col-12 d-flex  text-white">
      <div className="row mt-3">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="col-12 col-lg-6 col-xl-6 col-md-6   d-flex justify-content-center"
        >
          <img  src={OwnerPng} alt="javohir" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="d-flex justify-content-center text-center flex-column col-12 col-lg-6 col-xl-6 col-md-6 "
        >
          <h1 className="w-100 display-3 pt-sm-3">
            Javohir <br /> Toshmurodov
          </h1>
          <p >
            Основной вид деятельности : Ремонт - строительные монтажные работы,
            выпуск стройматериалов из сборного железобетона.
          </p>
          <span>
            <b>Учеридитель :</b> <i> Мамаев Чориёр Корабоевич</i>
          </span>
        </div>
      </div>
    </HomeWrapper>
  );
}
