import React from "react";
import ColleaguesCard from "../../components/ColleaguesCard";

export default function Colleagues() {
  return (
    <div className="row justify-content-center px-5 mt-3">
      <h2
        data-aos="fade-down"
        data-aos-duration="500"
        className="fw-bold text-center text-dark mb-3"
      >
        Cотрудники
      </h2>
      <ColleaguesCard />
    </div>
  );
}
