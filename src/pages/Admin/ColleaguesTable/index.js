import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteColleague,
  instance,
  loadColleges,
} from "../../../redux/actions";
export default function ColleaguesTable() {
  const colleagues = useSelector((state) => state.data.colleges.body);
  const dispatch = useDispatch();

  const delCollege = (id, e) => {
    try {
      instance
        .delete(`/api/v1/colleges/delete/${id}`)
        .then((res) => {
          dispatch(loadColleges());
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
            <th>коллеги</th>
            <th>описание</th>
            <th>изменит</th>
            <th>удалять</th>
          </tr>
        </thead>
        <tbody>
          {colleagues?.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td className="d-flex align-items-center gap-2">
                <TableImgContainer>
                  <img
                    src={e.url}
                    className="collegeTableImg"
                    alt="colleagueimage"
                  />
                </TableImgContainer>
                <div>{e.name}</div>
              </td>
              <td>{e.description}</td>
              <td>
                <button className="btn btn-warning ">
                  <FontAwesomeIcon icon={faPen} className="text-white" />
                </button>
              </td>
              <td>
                <button
                  onClick={(event) => delCollege(e.id, event)}
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
