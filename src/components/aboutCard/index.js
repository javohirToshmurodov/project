import React from "react";
import { useSelector } from "react-redux";
import { AboutCardWrapper } from "../../styles";

export default function AboutCard() {
  const projects = useSelector((state) => state.projectData.projects.body);

  return (
    <>
      {projects?.map((item, index) => (
        <AboutCardWrapper
          key={index}
          className="w-100 row mb-3 mb-sm-4 justify-content-center align-items-center "
        >
          <div
            className="col-xl-5 col-lg-5 col-md-5 col-sm-9 col-9"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <img className="img-fluid roundedImage" src={item.url} alt="" />
          </div>
          <div
            className="col-xl-5 col-lg-5 col-md-5 col-sm-9 col-9"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="d-flex">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="fw-bold  text-justify">{item.title}</p>
                <p className="text-justify">{item.description}</p>
              </div>
            </div>
          </div>
          <hr className="my-3 w-75" />
        </AboutCardWrapper>
      ))}
    </>
  );
}
