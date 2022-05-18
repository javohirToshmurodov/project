import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { instance } from "../../../redux/actions";

export default function Colleges() {
  // const [nameUz, setNameUz] = useState("");
  // const [nameRu, setNameRu] = useState("");
  // const [descUz, setDescUz] = useState("");
  // const [descRu, setDescRu] = useState("");

  const postColleague = () => {
    instance
      .post("/api/v1/colleges/create", {
        nameUZ: `${data.nameUZ}`,
        descriptionUZ: `${data.descriptionUZ}`,
        nameRU: `${data.nameRU}`,
        descriptionRU: `${data.descriptionRU}`,
        pictureId: `${data.pictureId}`,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  const { register, handleSubmit } = useForm();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   postColleague();
  // };
  const [data, setData] = useState("");
  return (
    <div className="col-12 col-xl-5 col-lg-5 col-md-6 col-sm-6">
      <div className="card">
        <div className="card-header">Colleagues crud</div>
        <div className="card-body">
          <form
            action="#"
          >
            <label htmlFor="college">college name</label>
            <input
              {...register("nameUz")}
              type="text"
              id="nameuz"
              placeholder="uz"
              className="form-control mb-3"
            />
            <label htmlFor="descriptionUz">Description uz</label>
            <textarea
              {...register("descriptionUz")}
              name=""
              id="descriptionUz"
              cols="30"
              rows="5"
              placeholder="write something"
              className="form-control"
            ></textarea>
            <hr />
            <label htmlFor="nameru">college name</label>
            <input
              {...register("nameRu")}
              type="text"
              id="nameru"
              placeholder="ru"
              className="form-control mb-3"
            />

            <label htmlFor="descriptionRu">Description ru</label>
            <textarea
              {...register("descriptionRu")}
              name=""
              id="descriptionRu"
              cols="30"
              rows="5"
              placeholder="write something"
              className="form-control"
            ></textarea>
            <label htmlFor="pictureid">pictureId</label>
            <input
              type="number"
              placeholder="...."
              {...register("pictureId")}
              className="form-control"
            />
            <div className="text-end mt-3">
              <p>{console.log(data)}</p>
              <button className="btn btn-success">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
