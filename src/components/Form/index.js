import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { instance, postCategory } from "../../redux/actions";
import { CategoryWrapper } from "../../styles";

export default function Form() {
  const [form, setForm] = useState({});
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();
  const createCategory = (data) => {
    const formData = data;
    // console.log(form);
    instance
      .post(
        `/api/v1/category/create/?nameRU=${data.nameRU}&nameUZ=${data.nameUZ}`,
        formData,
        {
          headers: {
            Accept: "*/*",
          },
        }
      )
      .then((res) => {
        dispatch(postCategory(res?.data));
        setForm(data);
        console.log(data);
        alert("category qo'shildi");
        reset()
      });
  };

  return (
    <div className="row">
      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-6">
        <CategoryWrapper>
          <h4 className="mb-3">Add Category</h4>
          <form action="#" onSubmit={handleSubmit(createCategory)}>
            <div className="mb-3">
              <label htmlFor="categoryru" className="form-label">
                Category RU
              </label>
              <input
                {...register("nameRU")}
                type="text"
                name="nameRU"
                placeholder="...."
                required
                id="categoryru"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoryuz" className="form-label">
                Category UZ
              </label>
              <input
                {...register("nameUZ")}
                name="nameUZ"
                type="text"
                required
                placeholder="...."
                id="categoryuz"
                className="form-control"
              />
            </div>
            <div className="text-end">
              <button  className="btn btn-warning mt-3 ">Submit</button>
            </div>
          </form>
        </CategoryWrapper>
      </div>
    </div>
  );
}
