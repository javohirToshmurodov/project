import React from "react";
import ColleaguesCard from "../../components/ColleaguesCard";
import hamkasb from "../../api/colleges";
import { useState } from "react";
import { useEffect } from "react";
export default function Colleagues() {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await hamkasb.get(
          "http://172.105.103.209:9091/api/v1/colleges/all"
        );
        if (response && response.data) setColleges(response.data);
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header);
        } else {
          console.log(`Error : ${err.message}`);
        }
      }
    };
    fetchColleges();
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
