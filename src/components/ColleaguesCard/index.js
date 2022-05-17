import React, { useEffect, useState } from "react";
import { CardOfColleague } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { loadColleges } from "../../redux/actions";
export default function ColleaguesCard() {
  const dispatch = useDispatch();
  const colleagues = useSelector((state) => state.data.colleges.body);
  console.log("setcolleges", colleagues);
  useEffect(() => {
    dispatch(loadColleges());
    console.log("useEffect ishladi");
  }, []);

  return (
    <>
      

       {colleagues?.map((item, index) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={index}>
            <CardOfColleague
              className="text-dark pb-3"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img loading="lazy" className="mb-3 img-fluid" src={item.url} alt="" />
              <div className="px-2">
                <h5>{item.name}</h5>
                <h6>
                  <b>{item.description}</b>{" "}
                </h6>
              </div>
            </CardOfColleague>
          </div>
        ))} 
    </>
  );
}
