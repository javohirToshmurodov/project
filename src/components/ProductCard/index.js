import React, { useEffect, useState } from "react";
import { ProductCardWrapper } from "../../styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function ProductCard() {
  const [produkt, setProdukt] = useState([]);

  const products = useSelector((state) => state.productData.products);
  const categories = useSelector((state) => state.categoryData.categories.body);

  const navigate = useNavigate();
  return (
    <>
      <div className=" w-25">
        <select className="form-select" aria-label="Default select example">
          <option selected>Open categories</option>
          {categories.map((e, i) => (
            <option>{e.name}</option>
          ))}
        </select>
      </div>

      {/* {products?.map((e, i) => (
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
              <h5 className="text-sm-small text-small">{e.description}</h5>
              <h3 className="productName">- {e.name}</h3>
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
      ))} */}
    </>
  );
}
