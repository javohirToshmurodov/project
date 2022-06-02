import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { instance, loadCategories, putCategory, putProducts } from "../../redux/actions";

export default function CategoryModal(props) {
  const [name, setName] = useState(props.name);
  const [id, setId] = useState(props.id);
  const dispatch = useDispatch();
  const modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.6)",
  };
  const handleEdit = (e) => {
    e.preventDefault();
    instance
      .put("/api/v1/category/update", {
        id: `${id}`,
        name: `${name}`,
      })
      .then((res) => {
        console.log(res?.data);
        dispatch(putProducts())
        dispatch(loadCategories())
        alert("отредактировано")
        props.setModal(false)
      });
  };
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <div className="modal" tabindex="-1" style={modalStyle}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              onClick={() => props.setModal(false)}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form action="" onSubmit={handleEdit}>
              <label htmlFor="editName">Ism</label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder=". . . . ."
                className="form-control my-3"
                onChange={(e) => setName(e.target.value)}
              />
              <div className="text-end">
                <button className="btn btn-warning">
                  <FontAwesomeIcon icon={faPencilRuler} className="me-2" />
                  edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
