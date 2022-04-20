import React from "react";
import { CardOfColleague } from "../../styles";
import { colleagues } from "../../data";
export default function ColleaguesCard() {
  console.log(colleagues);
  return (
    <>
      {colleagues.map((item, index) => (
        <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={index}>
          <CardOfColleague
            className="text-white pb-3"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img className="mb-3 img-fluid" src={item.image} alt="" />
            <div className="px-2">
              <h3>{item.fullName}</h3>
              <h5>
                <b>{item.position}</b>{" "}
              </h5>
              <i>{item.descrption}</i>
            </div>
          </CardOfColleague>
        </div>
      ))}
    </>
  );
}
