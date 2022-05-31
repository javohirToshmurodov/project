import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  accessToken,
  instance,
  loadProducts,
  postFile,
  postProducts,
} from "../../../redux/actions";
import { AddProductWrapper } from "../../../styles";

export default function Product() {
  const categories = useSelector((state) => state.categoryData.categories.body);
  const dispatch = useDispatch();
  // const { register, handleSubmit, reset } = useForm();
  const [nameUZ, setNameUZ] = useState("");
  const [nameRU, setNameRU] = useState("");
  const [descriptionUZ, setDescriptionUZ] = useState("");
  const [descriptionRU, setDescriptionRU] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [pictureId, setPictureId] = useState("");
  const selectCategory = (id) => {
    setCategoryId(id);
    console.log(categoryId);
  };
  const handleFile = (e) => {
    const formData = new FormData();

    formData.append("file", e);
    console.log(formData.get("file"));
    axios
      .post("http://172.105.103.209:9091/api/v1/upload", formData, {
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
  // const onSubmit = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .post("/api/v1/product/create/", {
        nameUZ: `${nameUZ}`,
        nameRU: `${nameRU}`,
        descriptionUZ: `${descriptionUZ}`,
        descriptionRU: `${descriptionRU}`,
        categoryId: `${categoryId}`,
        pictureId: `${pictureId}`,
      })
      .then((res) => {
        dispatch(postProducts(res?.data));
        dispatch(loadProducts());

        console.log(res?.data);
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
              <form action="#" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="productNameUz">
                    nameUZ
                  </label>
                  <input
                    onChange={(e) => setNameUZ(e.target.value)}
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
                    onChange={(e) => setNameRU(e.target.value)}
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
                    onChange={(e) => setDescriptionUZ(e.target.value)}
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
                    onChange={(e) => setDescriptionRU(e.target.value)}
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
                    type="file"
                    name="pictureId"
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
