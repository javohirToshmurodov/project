import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { instance, loadColleges, postColleague } from "../../../redux/actions";
export default function Colleges() {
  const [form, setForm] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const createColleague = (data) => {
    const formData = data;
    instance.post("/api/v1/colleges/create", formData).then((res) => {
      dispatch(postColleague(res?.data));
      setForm(data);
      alert("коллега добавил");
      dispatch(loadColleges())
      reset();
    });
  };
  return (
    <div className="col-12 col-xl-5 col-lg-5 col-md-6 col-sm-6">
      <div className="card">
        <div className="card-header">Colleagues crud</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(createColleague)} action="#">
            <label htmlFor="college">college name</label>
            <input
              {...register("nameUZ")}
              type="text"
              id="nameuz"
              name="nameUZ"
              required
              placeholder="uz"
              className="form-control mb-3"
            />
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
            <hr />
            <label htmlFor="nameru">college name</label>
            <input
              {...register("nameRU")}
              type="text"
              id="nameru"
              name="nameRU"
              placeholder="ru"
              className="form-control mb-3"
              required
            />

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
