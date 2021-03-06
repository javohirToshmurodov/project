import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { instance, loadCategories, postCategory } from "../../redux/actions";
import { CategoryWrapper } from "../../styles";

export default function Form() {
  const [form, setForm] = useState({});
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();
  const createCategory = (data) => {
    const formData = data;
    // console.log(form);
    try {
      instance
        .post(`/api/v1/category/create/`, formData, {
          headers: {
            Accept: "*/*",
          },
        })
        .then((res) => {
          dispatch(postCategory(res?.data));
          dispatch(loadCategories())
          setForm(data);
          alert("category добавлять");
          reset();
        });
    } catch (err) {
      console.log(err);
      console.log("category qo'shishda xatolik");
    }
  };

  return (
    <div className="row">
      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-6">
        <CategoryWrapper className="shadow p-3 rounded">
          <h4 className="mb-3">добавить категорию</h4>
          <form action="#" onSubmit={handleSubmit(createCategory)}>
            <div className="mb-3">
              <label htmlFor="categoryru" className="form-label">
              категори RU
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
              категори UZ
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
              <button className="btn btn-warning mt-3 ">добавлять</button>
            </div>
          </form>
        </CategoryWrapper>
      </div>
    </div>
  );
}
