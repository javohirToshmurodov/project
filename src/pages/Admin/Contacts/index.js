import {  faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {  instance, loadContacts } from "../../../redux/actions";
export default function Contacts() {
  const contact = useSelector((state) => state.contactData.contacts.body);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContacts());
  }, []);

  const delContact = (id, e) => {
    try {
      instance
        .delete(`/api/v1/contact/delete/${id}`)
        .then((res) => {
          dispatch(loadContacts());
          alert("контакт удален")
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-12">
      <table
        data-aos="fade-up"
        className="w-100 table table-hover rounded table-bordered table-dark table-striped mt-5"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Ф.И.О</th>
            <th>телефон</th>
            <th>эмаил</th>
            <th>сообщение</th>
            <th>удалять</th>
          </tr>
        </thead>
        <tbody>
          {contact?.map((e, i) => (
            <tr align="center" key={i}>
              <td>{i + 1}</td>
              <td>
                <div>{e.fullName}</div>
              </td>
              <td>{e.phoneNumber}</td>
              <td>{e.email}</td>
              <td>{e.message}</td>

              <td>
                <button
                  onClick={(event) => delContact(e.id, event)}
                  className="btn btn-danger"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const TableImgContainer = styled.div`
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;
