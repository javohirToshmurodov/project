import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { instance, postProjects } from "../../../redux/actions";

export default function Project() {
  const [form, setForm] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const createProjects = (data) => {
    const formData = data;
    console.log(form);
    instance.post("/api/v1/project/create", formData).then((res) => {
      dispatch(postProjects(res?.data));
      setForm(data);
      alert("проект добавлен");
      reset();
    });
  };
  return (
    <div className="col-12 col-xl-5 col-lg-5 col-md-6 col-sm-6">
      <div className="card">
        <div className="card-header bg-dark text-white">Projects crud</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(createProjects)} action="#">
            <label htmlFor="">project titleUz</label>
            <input
              {...register("titleUZ")}
              type="text"
              id="titleUz"
              name="titleUZ"
              required
              placeholder="uz"
              className="form-control mb-3"
            />

            <label htmlFor="nameru">project titleRu</label>
            <input
              {...register("titleRU")}
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
              {...register("descriptionUZ")}
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
              {...register("descriptionRU")}
              name="descriptionRU"
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
