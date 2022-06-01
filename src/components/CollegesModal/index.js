import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  instance,
  loadColleges,
  postFile,
  putColleges,
} from "../../redux/actions";

export default function CollegesModal(props) {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(props.description);
  const [name, setName] = useState(props.name);
  const [pictureId, setPictureId] = useState("");
  const modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.6)",
  };

  const selectFile = (e) => {
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
      .put("/api/v1/colleges/update", {
        id: `${props.id}`,
        name: `${name}`,
        description: `${description}`,
        pictureId: `${pictureId}`,
      })
      .then((res) => {
        console.log(res?.data);
        dispatch(putColleges());
        dispatch(loadColleges());
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
    <>
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
              <form action="#" onClick={handleSubmit}>
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  placeholder=". . . . "
                  className="form-control my-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="desc">Desc</label>
                <textarea
                  name="description"
                  id="desc"
                  value={description}
                  cols="30"
                  rows="4"
                  placeholder=". . . . ."
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label htmlFor="img">select File</label>
                <input
                  className="form-control mt-3"
                  type="file"
              
                />
                <div className="text-end mt-3">
                  <button className="btn btn-warning">
                    <FontAwesomeIcon className="me-2" icon={faPencilRuler} />
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
