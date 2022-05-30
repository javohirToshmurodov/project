import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  accessToken,
  instance,
  multipart,
  postFile,
  postProducts, 
} from "../../../redux/actions";
import { AddProductWrapper } from "../../../styles";
import { FileInput } from "./FileInput";

export default function Product() {
  const categories = useSelector((state) => state.categoryData.categories.body);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [imgFile, setImgFile] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const selectCategory = (id) => {
    setCategoryId(id);
    console.log(categoryId);
  };
  const handleFile = (e) => {
    setImgFile(e);
    const formData = new FormData();
    formData.append("file", imgFile);
    axios
      .post("http://172.105.103.209:9091/api/v1/upload", formData, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlzcyI6Imh0dHA6Ly8xNzIuMTA1LjEwMy4yMDk6OTA5MS9hcGkvbG9naW4iLCJleHAiOjE2NTQ3ODczODF9.VGqNALAf0UKx-tBl-DqK6v6yJaFMwfmR_AGBlNJP_K0",
          Accept: "*/*",
        },
      })
      .then((res) => console.log(res?.data))
      .catch((err) => console.log(err));
  };
  // const onSubmit = (e) => {};

  const createProduct = (data) => {
    const formData = data;
    console.log(formData);
    instance
      .post("/api/v1/product/create/", formData)
      .then((res) => {
        dispatch(postProducts(res?.data));
        console.log(res?.data);
        console.log(formData);
        reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="row  align-items-center">
      <div className="col-12 col-xl-5 col-lg-6 col-md-8 col-sm-8">
        <AddProductWrapper className="text-dark">
          <div className="mb-3"></div>
          <div className="card">
            <div className="card-header bg-dark text-white">Add product</div>
            <div className="card-body">
              <div className="mb-3">
                {/* <FileInput imgFile={imgFile} setImgFile={setImgFile} /> */}
              </div>
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
                    <option defaultValue={1}>Open categories</option>
                    {categories?.map((e, i) => (
                      <option key={i} value={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    multiple
                    {...register("pictureId")}
                    type="file"
                    onChange={(e) => handleFile(e.target.files[0])}
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
