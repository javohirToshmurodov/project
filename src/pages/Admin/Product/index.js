import React from "react";
import { AddProductWrapper } from "../../../styles";

export default function Product() {
  return (
    <div className="row  align-items-center">
      <div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4">
        <AddProductWrapper className="text-dark">
          <h4 className="mb-4">Add Product</h4>

          <form action="#" data-aos="zoom-in">
            <div className="mb-3">
              <label className="form-label" htmlFor="productNameUz">
                ProductName UZ
              </label>
              <input
                type="text"
                placeholder="...."
                id="productNameUz"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="productNameRu">
                ProductName RU
              </label>
              <input
                type="text"
                placeholder="...."
                id="productNameRu"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descUz" className="form-label">
                Description UZ
              </label>
              <textarea
                name=""
                id="descUz"
                cols="30"
                rows="4"
                placeholder="about product . . ."
                className="form-control"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="descRu" className="form-label">
                Description RU
              </label>
              <textarea
                name=""
                id="descRu"
                cols="30"
                rows="4"
                placeholder="about product . . ."
                className="form-control"
              ></textarea>
            </div>
            <div className="text-end">
              <button className="btn btn-warning mt-3">Submit</button>
            </div>
          </form>
        </AddProductWrapper>
      </div>
    </div>
  );
}
