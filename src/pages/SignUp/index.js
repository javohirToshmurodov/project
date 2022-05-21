import React, { useEffect, useState, useContext } from "react";
import { SignUpWrapper } from "../../styles";
import { useRef } from "react";
import Admin from "../Admin";
import {  instance } from "../../redux/actions";
export default function Signup() {
  const usernameRef = useRef();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  // axios post user here
// const history = useHistory()
  

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const response = instance
        .post("/api/v1/auth/login", {
          username: `${user}`,
          password: `${password}`,
        })
        .then((res) => {
          console.log(res.data.body);
          alert("you are logged in")
        });
      if (user === "admin" && password === "password") {
        setSuccess(true);
      } else if (user !== "admin" &&  password !== "password") {
        alert("username or password is incorrect , please try again")
        setSuccess(false);
      }else{
        alert(
          "username or password is incorrect, please try again!"
        )
      }
      setUser("");
      setPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server responses");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("UnAuthorized");
      } else {
        setErrMsg("Login Failed");
      }
      console.log("xato chiqdi", err);
    }
    console.log(user, password);
  };
  // autoComplete="off"

  return (
    <>
      {success ? (
        <>
          <Admin />
        </>
      ) : (
        <>
          <SignUpWrapper className="col-md-6 col-sm-8 col-xs-8 col-lg-6 col-xl-4  col-8">
            <h1 className="text-center"> Log in</h1>
            <form action="#" className="w-100" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Username..."
                  required
                  ref={usernameRef}
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  minLength={6}
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="• • • • • • • • •"
                />
              </div>
              <div className="text-end">
                <button type="submit" className="submitBtn btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </SignUpWrapper>
        </>
      )}
    </>
  );
}
