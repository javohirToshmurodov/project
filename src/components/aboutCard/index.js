import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProjects } from "../../redux/actions";
import { AboutCardWrapper } from "../../styles";

export default function AboutCard() {
  const [project, setProject] = useState([]);
  const projects = useSelector((state) => state.projectData.projects.body);
  useEffect(() => {
    setProject(projects);
    console.log(projects);
  }, []);

  return (
    <>
      {projects?.map((item, index) => (
        <AboutCardWrapper
          key={index}
          className="w-100 row mb-3 mb-sm-4 justify-content-center align-items-center "
        >
          <div
            className="col-xl-5 col-lg-5 col-md-5 col-sm-9 col-9"
            data-aos="fade-down-right"
            data-aos-duration="1400"
          >
            <img className="img-fluid roundedImage" src={item.url} alt="" />
          </div>
          <div
            className="col-xl-5 col-lg-5 col-md-5 col-sm-9 col-9"
            data-aos="fade-left"
            data-aos-duration="1400"
          >
            <div className="d-flex">
              <div className="d-flex justify-content-center align-items-center">
                <p>{item.description}</p>
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        </AboutCardWrapper>
      ))}
    </>
  );
}
