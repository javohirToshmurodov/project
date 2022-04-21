import React from "react";
import ColleaguesCard from "../../components/ColleaguesCard";

export default function Colleagues() {
  return (
    <div className="row px-5 mt-3">
      <h2 data-aos="fade-down" data-aos-duration="500" className="text-center text-white mb-3">20+ коллеги</h2>
      <ColleaguesCard />
    </div>
  );
}
