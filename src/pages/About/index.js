import React from "react";
import AboutCard from "../../components/aboutCard";
import { about } from "../../data";
import { aboutCardWrapper } from "../../styles";

export default function ABout() {
  console.log(about);
  return (
    <div className="text-white mt-5">
      <h1 className="text-center" data-aos="fade-down" data-aos-duration="1000">
        100+ professionals
      </h1>     
       <AboutCard />
    </div>
  );
}
