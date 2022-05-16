import React, { useEffect } from "react";
import { products } from "../../data";
import { ProductCardWrapper } from "../../styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadProducts } from "../../redux/actions";
export default function ProductCard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {products.map((e, i) => (
        <ProductCardWrapper
          key={i}
          data-aos="fade-left"
          className="d-flex mb-4 shadow rounded overflow-hidden"
        >
          <div className="imageWrapper">
            <img className="img-fluid" src={e.image} alt="" />
          </div>
          <div className="w-75">
            <div className="p-3">
              <h5 className="text-sm-small text-small">{e.description}</h5>
              <h3 className="productName">- {e.productName}</h3>
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
