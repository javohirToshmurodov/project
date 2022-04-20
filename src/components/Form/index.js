import React from "react";
import { SignUpWrapper } from "../../styles";

export default function Form() {
  return (
    <SignUpWrapper>
       <h4 className="mb-3">Add Category</h4>
      <form action="#" data-aos="zoom-in">
        <div className="mb-3">
          <label htmlFor="categoryuz" className="form-label">
            Category UZ
          </label>
          <input
            type="text"
            placeholder="...."
            id="categoryuz"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categoryru" className="form-label">
            Category RU
          </label>
          <input
            type="text"
            placeholder="...."
            id="categoryru"
            className="form-control"
          />
        </div>
        <div className="text-end">
          <button className="btn btn-warning mt-3 ">Submit</button>
        </div>
      </form>
    </SignUpWrapper>
  );
}
