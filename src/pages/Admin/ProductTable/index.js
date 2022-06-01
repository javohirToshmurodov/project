import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { getProducts, instance, loadProductsAll } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import EditModal from "../../../components/Modal";
export default function ProductTable() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [pictureId, setPictureId] = useState("");
  const [id, setId] = useState("");
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

  const delProduct = (id, e) => {
    try {
      instance.delete(`/api/v1/product/delete/${id}`).then((res) => {
        dispatch(loadProductsAll());
      });
    } catch (err) {
      console.log(err);
    }
  };
  const putProduct = (name, description, id, categoryId, pictureId) => {
    setId(id);
    setName(name);
    setDescription(description);
    setCategoryId(categoryId);
    setPictureId(pictureId);
    return setModal(true);
  };
  useEffect(() => {
    console.log(products);
  }, []);
  return (
    <>
      <div className="w-25">
        <select
          onChange={(event) => loadProducts(event.target.value)}
          className="form-select mb-3 mt-4"
          aria-label="Default select example"
        >
          <option defaultValue="1">All</option>
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
                <tr align="center" key={i}>
                  <td>{i + 1}</td>
                  <td className="d-flex align-items-center gap-2">
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
                  <td>{e.id}</td>
                  <td>
                    <button
                      onClick={() =>
                        putProduct(
                          e.id,
                          e.name,
                          e.description,
                          e.categoryId,
                          e.pictureId
                        )
                      }
                      className="btn btn-warning"
                    >
                      <FontAwesomeIcon icon={faPen} className="text-white" />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(event) => delProduct(e.id)}
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
      </div>
      {modal ? (
        <EditModal
          id={name}
          name={id}
          description={description}
          categoryId={categoryId}
          pictureId={pictureId}
          modal={modal}
          setModal={setModal}
        />
      ) : (
        ""
      )}
    </>
  );
}
export const TableImgContainer = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
