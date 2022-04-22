import React from "react";
import { ContactWrapper } from "../../styles";
import ContactBackground from "../../assets/contactBackground.jpg"
export default function ContactUs() {
  const contactStyle ={
    backgroundImage:`url(${ContactBackground})`,
    backgroundSize:"cover",
    borderRadius:"5px"
  }
  return (
    <div className="row mt-5 text-white">
      <div className="offset-2  col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
        <h3 className="mb-3"> Контакт</h3>
        <ContactWrapper style={contactStyle} className="">
            <p>sdd</p>
        </ContactWrapper>
      </div>
    </div>
  );
}
