import React, { useEffect, useState } from "react";
import { ProductCardWrapper } from "../../styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, instance } from "../../redux/actions";
export default function ProductCard() {
  const [produkt, setProdukt] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productData.products.body);
  const categories = useSelector((state) => state.categoryData.categories.body);
  const [idCategory, setIdCategory] = useState("");
  const navigate = useNavigate()
  const loadProducts = (id) => {
    instance
      .get(`/api/v1/product/all/${id}`)
      .then((res) => {
        dispatch(getProducts(res?.data));
        console.log(res?.data);
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <>
      <div className=" w-25">
        <select
          onChange={(event) => loadProducts(event.target.value)}
          className="form-select mb-4"
          aria-label="Default select example"
        >
          <option defaultValue={"1"}>Open categories</option>
          <option value="1">nimadir</option>
          {categories?.map((e, i) => (
            <option key={i} value={e.id}>
              {e.name}
            </option>
          ))}
        </select> 
      </div>

      {products?.map((e, i) => (
        <ProductCardWrapper
          key={i}
          data-aos="fade-left"
          className="d-flex mb-4 shadow rounded overflow-hidden"
        >
          <div className="imageWrapper">
            <img className="img-fluid" src={e.url} alt="" />
          </div>
          <div className="w-75">
            <div className="p-3">
              <h3 className="productName">{e.name}</h3>
              <h5 className="text-sm-small text-small">- {e.description}</h5>
            </div>
            <div className="text-end pe-3">
              <button
                onClick={() => navigate("/contact")}
                className="btn btn-success"
              >
                Contact us
              </button>
            </div>
          </div>
        </ProductCardWrapper>
      ))}
    </>
  );
}
