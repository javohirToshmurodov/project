import React from "react";
import { ProductCardWrapper } from "../../styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, instance } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function ProductCard() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryData.categories?.body);
  const products = useSelector((state) => state.productData.products?.body);

  const navigate = useNavigate();
  const loadProducts = (id) => {
    instance
      .get(`/api/v1/product/all/${id}`)
      .then((res) => {
        dispatch(getProducts(res?.data));
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
          <option>All categories</option>
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
                <FontAwesomeIcon className="me-2" icon={faCartShopping} />
                ??????????????
              </button>
            </div>
          </div>
        </ProductCardWrapper>
      ))}
    </>
  );
}
