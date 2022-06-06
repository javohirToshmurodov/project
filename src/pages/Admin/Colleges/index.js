import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  accessToken,
  instance,
  loadColleges,
  postColleague,
  postFile,
} from "../../../redux/actions";
export default function Colleges() {
  const [nameUZ, setNameUZ] = useState("");
  const [nameRU, setNameRU] = useState("");
  const [descriptionUZ, setDescriptionUZ] = useState("");
  const [descriptionRU, setDescriptionRU] = useState("");
  const [pictureId, setPictureId] = useState("");
  const { reset } = useForm();
  const dispatch = useDispatch();
  const handleFile = (e) => {
    const formData = new FormData();
    formData.append("file", e);
    console.log(formData.get("file"));
    instance
      .post("/api/v1/upload", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "*/*",
        },
      })
      .then((res) => {
        console.log(res?.data.body);
        dispatch(postFile(res?.data.body));
        setPictureId(res?.data.body);
      })
      .catch((err) => console.log(err));
  };
  const createColleague = (data) => {
    data.preventDefault();
    instance
      .post("/api/v1/colleges/create", {
        nameUZ: `${nameUZ}`,
        descriptionUZ: `${descriptionUZ}`,
        nameRU: `${nameRU}`,
        descriptionRU: `${descriptionRU}`,
        pictureId: `${pictureId}`,
      })
      .then((res) => {
        dispatch(postColleague(res?.data));
        console.log(res?.data);
        alert("коллега добавил");
        setNameUZ("");
        setNameRU("");
        dispatch(loadColleges());
        reset();
      });
  };
  return (
    <div className="col-12 col-xl-5 col-lg-5 col-md-6 col-sm-6">
      <div className="card">
        <div className="card-header">Добавить коллегу</div>
        <div className="card-body">
          <form onSubmit={createColleague} action="#">
            <label htmlFor="college">имя коллеги UZ</label>
            <input
              onChange={(e) => setNameUZ(e.target.value)}
              type="text"
              id="nameuz"
              name="nameUZ"
              required
              placeholder="uz"
              className="form-control mb-3"
            />
            <label htmlFor="descriptionUz"> описание UZ</label>
            <textarea
              onChange={(e) => setDescriptionUZ(e.target.value)}
              name="descriptionUZ"
              id="descriptionUz"
              cols="30"
              rows="3"
              required
              placeholder=" описание..."
              className="form-control"
            ></textarea>
            <hr />
            <label htmlFor="nameru">имя коллеги RU</label>
            <input
              onChange={(e) => setNameRU(e.target.value)}
              type="text"
              id="nameru"
              name="nameRU"
              placeholder="ru"
              className="form-control mb-3"
              required
            />

            <label htmlFor="descriptionRu">описание ru</label>
            <textarea
              onChange={(e) => setDescriptionRU(e.target.value)}
              name="descriptionRU"
              id="descriptionRu"
              cols="30"
              rows="3"
              placeholder="описание..."
              className="form-control"
              required
            ></textarea>
            <div className="mb-3 mt-2">
              <input
                required
                type="file"
                className="form-control"
                name="pictureId"
                onChange={(e) => handleFile(e.target.files[0])}
              />
            </div>
            <div className="text-end mt-3">
              <button className="btn btn-success">добавлять</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
