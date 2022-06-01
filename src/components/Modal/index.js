import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  instance,
  postFile,
  putProducts,
} from "../../redux/actions";

export default function EditModal(props) {
  const [name, setName] = useState(props.description);
  const [desc, setDesc] = useState(props.name);
  const [categoryId, setCategoryId] = useState(props.categoryId);
  const [pictureId, setPictureId] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryData.categories.body);
  const modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.6)",
  };
  


  const selectCategory = (id) => {
    setCategoryId(id);
    console.log(categoryId);
  };
  const handleFile = (e) => {
    console.log(e);
    const fd = new FormData();
    fd.append("file", e);
    instance
      .post("/api/v1/upload", fd)
      .then((res) => {
        dispatch(postFile(res?.data.body));
        setPictureId(res?.data.body);
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .put("api/v1/product/update", {
        id: `${props.id}`,
        name: `${name}`,
        description: `${desc}`,
        categoryId: `${categoryId}`,
        pictureId: `${pictureId}`,
      })
      .then((res) => {
        console.log(res?.data);
        dispatch(putProducts(res?.data));
        props.setModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className="modal " tabindex="-1" style={modalStyle}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">изменит коллеги</h5>
            <button
              onClick={() => props.setModal(false)}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="name">college name</label>
              <input
                name="name"
                required
                id="name"
                type="text"
                value={name}
                className="form-control my-2"
                placeholder="....."
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="description">description</label>
              <textarea
                name="description"
                id="description"
                value={desc}
                cols="30"
                required
                rows="3"
                placeholder="......"
                onChange={(e) => setDesc(e.target.value)}
                className="form-control my-2"
              ></textarea>
              <select
                onChange={(event) => selectCategory(event.target.value)}
                className="form-select my-2"
                name="categoryId"
                required
                defaultValue={categoryId}
              >
                {categories?.map((e, i) => (
                  <option key={i} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
              <input
                onChange={(e) => handleFile(e.target.files[0])}
                type="file"
                className="form-control mt-2"
                required
              />
              <div className="text-end mt-3">
                <button className="btn btn-warning">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
