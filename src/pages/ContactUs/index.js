import React from "react";
import { Connections, ContactWrapper } from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
export default function ContactUs() {
  // const contactStyle = {
  //   backgroundImage: `url(${ContactBackground})`,
  //   backgroundSize: "cover",
  //   borderRadius: "5px",
  // };
  return (
    <div className="row mt-3 text-dark justify-content-center gap-3 align-items-center">
      <div className=" mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-8 col-12">
        <ContactWrapper className="py-3">
          <h5 className="text-center">Contact us</h5>
          <form action="#">
            <div className="mb-3">
              <label className="form-label" htmlFor="contactName">
                Имя
              </label>
              <input
                required
                type="text"
                id="contactName"
                placeholder="имя..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contactEmail">
                Эмаил
              </label>
              <input
                required
                type="email"
                id="contactEmail"
                placeholder="введите действителний адрес электронной почти"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contactMessage">
                Cообщение
              </label>
              <textarea
                required
                name=""
                id="contactMessage"
                className="form-control"
                cols="30"
                rows="4"
                placeholder="введите сообщение"
              ></textarea>
            </div>
            <div className="text-end">
              <button className="btn btn-dark">Submit</button>
            </div>
          </form>
        </ContactWrapper>
      </div>
      <div className="mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-8 col-12 pb-5">
        <Connections>
          <ul>
            <li
              data-aos="zoom-in"
              data-aos-duration="500"
              className="contactStyle"
            >
              <FontAwesomeIcon className="me-2" icon={faTelegram} />
              <i> @karkasjbi</i>
            </li>
            <li
              data-aos="zoom-in"
              data-aos-duration="800"
              className="contactStyle"
            >
              <FontAwesomeIcon className="me-2" icon={faEnvelope} />
              <i> karkasjbi@gmail.com</i>
            </li>
            <li
              data-aos="zoom-in"
              data-aos-duration="600"
              className="contactStyle"
            >
              <FontAwesomeIcon className="me-2" icon={faPhoneSquare} />
              <i>(71) 230-03-04</i>
            </li>
          </ul>
        </Connections>
      </div>
    </div>
  );
}
