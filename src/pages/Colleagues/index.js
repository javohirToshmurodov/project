import React from "react";
import ColleaguesCard from "../../components/ColleaguesCard";
import { useState } from "react";
import { useEffect } from "react";
import { loadColleges } from "../../redux/actions";
import { useSelector } from "react-redux";
export default function Colleagues() {
  const [colleges, setColleges] = useState([]);
  const colleagues = useSelector((state) => state.global.colleges);
  console.log(colleagues);
  useEffect(() => {
    loadColleges();
    console.log(colleagues);
  }, []);
  return (
    <div className="row px-5 mt-3">
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
