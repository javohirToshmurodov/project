import React, { useState } from "react";
import { Connections, ContactWrapper } from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { instance, loadContacts, postContacts } from "../../redux/actions";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
export default function ContactUs() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const createContact = (data) => {
    const formData = data;
    instance.post("/api/v1/contact/create", formData).then((res) => {
      dispatch(postContacts(res?.data));
      dispatch(loadContacts())
      alert("запрос отправлен");
      reset();
    });
  };
   
  
  return (
    <div className="row mt-3 text-dark justify-content-center gap-3 align-items-center">
      <div className=" mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-8 col-12">
        <ContactWrapper className="py-3">
          <h5 className="text-center">Свяжитесь с нами</h5>
          <form onSubmit={handleSubmit(createContact)} action="#">
            <div className="mb-3">
              <label className="form-label" htmlFor="contactName">
                ФИО
              </label>
              <input
                {...register("fullName")}
                name="fullName"
                required
                type="text"
                id="contactName"
                placeholder="имя..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contacttel">
                телефон
              </label>
              <input
                required
                {...register("phoneNumber")}
                name="phoneNumber"
                type="text"
                id="contacttel"
                placeholder="+998..."
                className="form-control"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contactEmail">
                Эмаил
              </label>
              <input
                {...register("email")}
                name="email"
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
                {...register("message")}
                name="message"
                required
                id="contactMessage"
                className="form-control"
                cols="30"
                rows="4"
                placeholder="введите сообщение"
              ></textarea>
            </div>
            <div className="text-end">
              <button className="btn btn-success">контакт</button>
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
