import React from "react";
import { about } from "../../data";
import { AboutCardWrapper, Perspective } from "../../styles";

export default function aboutCard() {
  return (
    <>
      {about.map((item, index) => (
        <AboutCardWrapper
          key={index}
          className="w-100 row mb-3 mb-sm-4 justify-content-center align-items-center "
        >
          <div
            className="col-xl-5 col-lg-5 col-md-5 col-sm-9 col-9"
            data-aos="fade-down-right"
            data-aos-duration="1400"
          >
            {/* <Perspective className="d-flex justify-content-center "> */}
              <img className="img-fluid roundedImage" src={item.img} alt="" />
            {/* </Perspective> */}
          </div>
          <div
            className="col-xl-5 col-lg-5 col-md-5 col-sm-9 col-9"
            data-aos="fade-left"
            data-aos-duration="1400"
          >
            <div className="d-flex">
              <div className="d-flex justify-content-center align-items-center">
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        </AboutCardWrapper>
      ))}
    </>
  );
}
