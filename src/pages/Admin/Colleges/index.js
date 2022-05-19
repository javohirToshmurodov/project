import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { instance } from "../../../redux/actions";

export default function Colleges() {
  const [form, setForm] = useState({});
  const { register, handleSubmit, reset } = useForm();

  const postColleague = (data) => {
    const formData = data;
    console.log(form);
    instance
      .post("/api/v1/colleges/create", formData)
      .then((res) => {
        console.log(res.json());
      });
  };
  return (
    <div className="col-12 col-xl-5 col-lg-5 col-md-6 col-sm-6">
      <div className="card">
        <div className="card-header">Colleagues crud</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(postColleague)} action="#">
            <label htmlFor="college">college name</label>
            <input
              {...register("nameUz")}
              type="text"
              id="nameuz"
              name="nameUz"
              required
              placeholder="uz"
              className="form-control mb-3"
            />
            <label htmlFor="descriptionUz">Description uz</label>
            <textarea
              {...register("descriptionUz")}
              name="descriptionUz"
              id="descriptionUz"
              cols="30"
              rows="3"
              required
              placeholder="write something"
              className="form-control"
            ></textarea>
            <hr />
            <label htmlFor="nameru">college name</label>
            <input
              {...register("nameRu")}
              type="text"
              id="nameru"
              name="nameRu"
              placeholder="ru"
              className="form-control mb-3"
              required
            />

            <label htmlFor="descriptionRu">Description ru</label>
            <textarea
              {...register("descriptionRu")}
              name="descriptionRu"
              id="descriptionRu"
              cols="30"
              rows="3"
              placeholder="write something"
              className="form-control"
              required
            ></textarea>
            <label htmlFor="pictureid">pictureId</label>
            {/* <input type="file" {...register("file")} className="form-control" /> */}
            <input
              type="number"
              {...register("pictureId")}
              className="form-control"
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
