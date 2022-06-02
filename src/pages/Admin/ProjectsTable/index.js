import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProjectModal from "../../../components/ProjectModal";
import { instance, loadProjects } from "../../../redux/actions";
export default function ProjectsTable() {
  const projects = useSelector((state) => state.projectData.projects?.body);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [pictureId, setPictureId] = useState("");
  const [id, setId] = useState("");
  const delProjects = (id, e) => {
    try {
      instance.delete(`/api/v1/project/delete/${id}`).then((res) => {
        dispatch(loadProjects());
        alert("проект удален")
      });
    } catch (err) {
      console.log(err);
    }
  };
  const putProject = (id, title, description, pictureId) => {
    setTitle(title);
    setDescription(description);
    setId(id);
    setPictureId(pictureId);
    setModal(true);
  };
  return (
    <>
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
            {projects?.map((e, i) => (
              <tr align="center" key={i}>
                <td>{i + 1}</td>
                <td className="d-flex align-items-center gap-2">
                  <TableImgContainer>
                    <img
                      src={e.url}
                      className="collegeTableImg"
                      alt="colleagueimage"
                    />
                  </TableImgContainer>
                  <div>{e.title}</div>
                </td>
                <td>{e.description}</td>
                <td>
                  <button
                    onClick={() =>
                      putProject(e.title, e.description, e.pictureId, e.id)
                    }
                    className="btn btn-warning "
                  >
                    <FontAwesomeIcon icon={faPen} className="text-white" />
                  </button>
                </td>
                <td>
                  <button
                    onClick={(event) => delProjects(e.id, event)}
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
      {modal ? (
        <ProjectModal
          id={pictureId}
          title={id}
          description={title}
          pictureId={description}
          setModal={setModal}
        />
      ) : (
        ""
      )}
    </>
  );
}

export const TableImgContainer = styled.div`
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;
