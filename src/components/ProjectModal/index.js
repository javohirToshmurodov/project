import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  instance,
  loadProjects,
  postFile,
  putProjects,
} from "../../redux/actions";

export default function ProjectModal(props) {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [pictureId, setPictureId] = useState("");
  const dispatch = useDispatch();
  const modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.6)",
  };
  useEffect(() => {
    console.log(props);
  }, []);
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
  const editProject = (e) => {
    e.preventDefault();
    try {
      instance
        .put("/api/v1/project/update", {
          id: `${props.id}`,
          title: `${title}`,
          description: `${description}`,
          pictureId: `${pictureId}`,
        })
        .then((res) => {
          console.log(res?.data);
          dispatch(putProjects());
          dispatch(loadProjects());
          alert("edited");
          props.setModal(false);
        });
    } catch (err) {
      console.log(err);
    }
  };
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
            <form action="#" onSubmit={editProject}>
              <input
                name="name"
                required
                id="name"
                type="text"
                value={title}
                className="form-control my-2"
                placeholder="....."
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="description">description</label>
              <textarea
                name="description"
                id="description"
                value={description}
                cols="30"
                required
                rows="3"
                placeholder="......"
                onChange={(e) => setDescription(e.target.value)}
                className="form-control my-2"
              ></textarea>
              <input
                type="file"
                onChange={(e) => handleFile(e.target.files[0])}
                className="form-control"
              />
              <div className="text-end mt-3">
                <button className="btn btn-warning">add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
