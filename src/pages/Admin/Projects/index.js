import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  accessToken,
  instance,
  loadProjects,
  postFile,
  postProjects,
} from "../../../redux/actions";

export default function Project() {
  const [titleUZ, setTitleUZ] = useState("");
  const [titleRU, setTitleRU] = useState("");
  const [descriptionUZ, setDescriptionUZ] = useState("");
  const [descriptionRU, setDescriptionRU] = useState("");
  const [pictureId, setPictureId] = useState("");
  const { reset } = useForm();
  const dispatch = useDispatch();
  const handleFile = (e) => {
    const formData = new FormData();

    formData.append("file", e);
    console.log(formData.get("file"));
    instance
      .post("/api/v1/upload", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "*/*",
        },
      })
      .then((res) => {
        console.log(res?.data.body);
        dispatch(postFile(res?.data.body));
        setPictureId(res?.data.body);
      })
      .catch((err) => console.log(err));
  };
  const createProjects = (data) => {
    data.preventDefault();
    instance
      .post("/api/v1/project/create", {
        titleUZ: `${titleUZ}`,
        titleRU: `${titleRU}`,
        descriptionUZ: `${descriptionUZ}`,
        descriptionRU: `${descriptionRU}`,
        pictureId: `${pictureId}`,
      })
      .then((res) => {
        dispatch(postProjects(res?.data));
        console.log(res?.data);
        alert("проект добавлен");
        dispatch(loadProjects());
        reset();
      });
  };
  return (
    <div className="col-12 col-xl-5 col-lg-5 col-md-6 col-sm-6">
      <div className="card">
        <div className="card-header bg-dark text-white">Projects crud</div>
        <div className="card-body">
          <form onSubmit={createProjects} action="#">
            <label htmlFor="">project titleUz</label>
            <input
              onChange={(e) => setTitleUZ(e.target.value)}
              type="text"
              id="titleUz"
              name="titleUZ"
              required
              placeholder="uz"
              className="form-control mb-3"
            />

            <label htmlFor="nameru">project titleRu</label>
            <input
              onChange={(e) => setTitleRU(e.target.value)}
              type="text"
              id="nameru"
              name="titleRU"
              placeholder="ru"
              className="form-control mb-3"
              required
            />
            <hr />

            <label htmlFor="descriptionUz">Description uz</label>
            <textarea
              onChange={(e) => setDescriptionUZ(e.target.value)}
              name="descriptionUZ"
              id="descriptionUz"
              cols="30"
              rows="3"
              required
              placeholder="write something"
              className="form-control"
            ></textarea>
            <label htmlFor="descriptionRu">Description ru</label>
            <textarea
              onChange={(e) => setDescriptionRU(e.target.value)}
              name="descriptionRU"
              id="descriptionRu"
              cols="30"
              rows="3"
              placeholder="write something"
              className="form-control"
              required
            ></textarea>
            <input
              required
              type="file"
              name="pictureId"
              onChange={(e) => handleFile(e.target.files[0])}
              className="form-control my-3"
            />
            <div className="text-end mt-3">
              <button className="btn btn-success">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
