import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  accessToken,
  instance,
  lang,
  postProducts,
} from "../../../redux/actions";
import { AddProductWrapper } from "../../../styles";

export default function Product() {
  const categories = useSelector((state) => state.categoryData.categories.body);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [categoryId, setCategoryId] = useState("");
  const selectCategory = (id) => {
    setCategoryId(id);
    console.log(categoryId);
  };

  const handleFileSelect = (data) => {
    const formData = data.target.files[0];

    instance
      .post("/api/v1/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res?.data))
      .catch((err) => console.log(err));
    // try {
    //   const response = axios({
    //     method: "post",
    //     url: "/api/v1/upload",
    //     data: formData,
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //       Accept: "*/*",
    //       "Accept-Language": `${lang}`,
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   console.log(response?.data);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  const createProduct = (data) => {
    const formData = data;
    instance
      .post("/api/v1/product/create/", formData)
      .then((res) => {
        dispatch(postProducts(res?.data));
        console.log(res?.data);
        reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="row  align-items-center">
      <div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4">
        <AddProductWrapper className="text-dark">
          <div className="card">
            <div className="card-header bg-dark text-white">Add product</div>
            <div className="card-body">
              <form action="#" onSubmit={handleSubmit(createProduct)}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="productNameUz">
                    nameUZ
                  </label>
                  <input
                    {...register("nameUZ")}
                    type="text"
                    name="nameUZ"
                    required
                    placeholder="...."
                    id="productNameUz"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="productNameRu">
                    nameRU
                  </label>
                  <input
                    {...register("nameRU")}
                    name="nameRU"
                    required
                    type="text"
                    placeholder="...."
                    id="productNameRu"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descUz" className="form-label">
                    descriptionUZ
                  </label>
                  <textarea
                    {...register("descriptionUZ")}
                    name="descriptionUZ"
                    id="descUz"
                    required
                    cols="30"
                    rows="4"
                    placeholder="about product . . ."
                    className="form-control"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="descRu" className="form-label">
                    descriptionRU
                  </label>
                  <textarea
                    {...register("descriptionRU")}
                    name="descriptionRU"
                    id="descRu"
                    cols="30"
                    required
                    rows="4"
                    placeholder="about product . . ."
                    className="form-control"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <select
                    {...register("categoryId")}
                    onChange={(event) => selectCategory(event.target.value)}
                    className="form-select mb-3 mt-4"
                    aria-label="Default select example"
                  >
                    <option defaultValue={"1"}>Open categories</option>
                    {categories?.map((e, i) => (
                      <option key={i} value={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    {...register("pictureId")}
                    className="form-control"
                    type="file"
                    name="pictureId"
                    onChange={handleFileSelect}
                  />
                </div>
                <div className="text-end">
                  <button className="btn btn-warning mt-3">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </AddProductWrapper>
      </div>
    </div>
  );
}
