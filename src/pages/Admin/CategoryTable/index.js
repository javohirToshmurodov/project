import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryModal from "../../../components/CategoryModal";
import {
  instance,
  loadCategories,
  loadProductsAll,
} from "../../../redux/actions";

export default function CategoryTable() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryData.categories.body);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const delCategory = (id, e) => {
    try {
      instance.delete(`/api/v1/category/delete/${id}`).then((res) => {
        dispatch(loadCategories());
        dispatch(loadProductsAll());
      });
    } catch (err) {
      console.log(err);
    }
  };
  const putCategories = (id, name) => {
    setName(name);
    setId(id);
    return setModal(true);
  };
  return (
    <>
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
                  <button
                    onClick={() => putCategories(e.id, e.name)}
                    className="btn btn-warning"
                  >
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
      {modal ? <CategoryModal id={id} name={name} setModal={setModal} /> : ""}
    </>
  );
}
