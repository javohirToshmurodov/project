import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { products } from "../../../data";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
export default function ProductTable() {
  return (
    <div className="row">
      <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-12">
        <table
          data-aos="fade-up"
          className="w-100 table table-hover rounded table-bordered table-dark table-striped mt-5"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>ProductName</th>
              <th>Description</th>
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
                <td>{e.sold}</td>
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
  );
}
