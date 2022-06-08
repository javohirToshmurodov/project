import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  instance,
  loadCategories,
  loadProductsAll,
  postFile,
  postProducts,
} from "../../../redux/actions";
import { AddProductWrapper } from "../../../styles";

export default function Product() {
  const categories = useSelector((state) => state.categoryData.categories.body);
  const dispatch = useDispatch();
  const [nameUZ, setNameUZ] = useState("");
  const [nameRU, setNameRU] = useState("");
  const [descriptionUZ, setDescriptionUZ] = useState("");
  const [descriptionRU, setDescriptionRU] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [pictureId, setPictureId] = useState("");
  const selectCategory = (id) => {
    setCategoryId(id);
  };
  const handleFile = (e) => {
    const formData = new FormData();

    formData.append("file", e);
    console.log(formData.get("file"));
    instance
      .post("/api/v1/upload", formData)
      .then((res) => {
        dispatch(postFile(res?.data.body));
        setPictureId(res?.data.body);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
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
          alert("produkt dobavlen");
          dispatch(loadProductsAll());
          dispatch(loadCategories());
          setNameRU("");
          setNameUZ("");
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="row  align-items-center">
      <div className="col-12 col-xl-5 col-lg-6 col-md-8 col-sm-8">
        <AddProductWrapper className="text-dark">
          <div className="mb-3"></div>
          <div className="card">
            <div className="card-header bg-dark text-white">
              Добавить продукт
            </div>
            <div className="card-body">
              <div className="mb-3">
              </div>
              <form action="#" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="productNameUz">
                    имя UZ
                  </label>
                  <input
                    onChange={(e) => setNameUZ(e.target.value)}
                    type="text"
                    name="nameUZ"
                    required
                    value={nameUZ}
                    placeholder="...."
                    id="productNameUz"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="productNameRu">
                    имя RU
                  </label>
                  <input
                    onChange={(e) => setNameRU(e.target.value)}
                    name="nameRU"
                    required
                    value={nameRU}
                    type="text"
                    placeholder="...."
                    id="productNameRu"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descUz" className="form-label">
                    описание UZ
                  </label>
                  <textarea
                    onChange={(e) => setDescriptionUZ(e.target.value)}
                    name="descriptionUZ"
                    id="descUz"
                    required
                    cols="30"
                    rows="4"
                    placeholder="о продукте . . ."
                    className="form-control"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="descRu" className="form-label">
                    описание RU
                  </label>
                  <textarea
                    onChange={(e) => setDescriptionRU(e.target.value)}
                    name="descriptionRU"
                    id="descRu"
                    cols="30"
                    required
                    rows="4"
                    placeholder="о продукте . . ."
                    className="form-control"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <select
                    onChange={(event) => selectCategory(event.target.value)}
                    className="form-select mb-3 mt-4"
                    aria-label="Default select example"
                  >
                    <option defaultValue={1}>выберите категорию</option>
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
                    required
                    type="file"
                    name="pictureId"
                    onChange={(e) => handleFile(e.target.files[0])}
                  />
                </div>
                <div className="text-end">
                  <button className="btn btn-warning mt-3">добавлять</button>
                </div>
              </form>
            </div>
          </div>
        </AddProductWrapper>
      </div>
    </div>
  );
}
