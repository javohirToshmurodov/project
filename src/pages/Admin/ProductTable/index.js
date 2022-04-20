import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { products } from "../../../data";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
export default function ProductTable() {
  return (
    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
      <table data-aos="fade-up" className="table table-hover rounded table-bordered table-dark table-striped mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>ProductName</th>
            <th>Description</th>
            <th>CreatedAt </th>
            <th>Sold</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{e.productName}</td>
              <td>{e.description}</td>
              <td>{e.createdAt}</td>
              <td>{e.sold}</td>
              <td>
                <button className="btn btn-warning ">
                <FontAwesomeIcon icon={faPen} className="text-white"/>
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
  );
}
