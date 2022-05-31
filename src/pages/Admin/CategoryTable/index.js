import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { instance, loadCategories, loadProducts } from "../../../redux/actions";

export default function CategoryTable() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryData.categories.body);

  const delCategory = (id, e) => {
    try {
      instance.delete(`/api/v1/category/delete/${id}`).then((res) => {
        dispatch(loadCategories());
        dispatch(loadProducts());
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="col-xl-7 col-lg-9 col-md-6 col-sm-6 col-12">
      <table className="table-dark table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>категори</th>
            <th>изменит</th>
            <th>удалит</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((e, i) => (
            <tr align="center" key={i}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>
                <button className="btn btn-warning">
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </td>
              <td>
                <button
                  onClick={(event) => delCategory(e.id, event)}
                  className="btn btn-danger"
                >
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
