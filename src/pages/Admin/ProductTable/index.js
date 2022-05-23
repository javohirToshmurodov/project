import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { products } from "../../../data";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { getProducts, instance } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
export default function ProductTable() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productData.products.body);
  const categories = useSelector((state) => state.categoryData.categories.body);
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
      <div className="w-25">
        <select
          onChange={(event) => loadProducts(event.target.value)}
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
      <div className="row">
        <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-12">
          <table
            data-aos="fade-up"
            className="w-100 table table-hover rounded table-bordered table-dark table-striped mt-5"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>описание</th>
                <th>id</th>
                <th>изменит</th>
                <th>удалять</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((e, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <TableImgContainer>
                      <img
                        src={e.url}
                        className="collegeTableImg"
                        alt="colleagueimage"
                      />
                    </TableImgContainer>
                    <div>{e.name}</div>
                  </td>
                  <td>{e.description}</td>
                  <td>{e.categoryId}</td>
                  <td>
                    <button className="btn btn-warning ">
                      <FontAwesomeIcon icon={faPen} className="text-white" />
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export const TableImgContainer = styled.div`
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;
