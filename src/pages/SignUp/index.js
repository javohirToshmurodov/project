import React, { useEffect, useState, useContext } from "react";
import { SignUpWrapper } from "../../styles";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Admin from "../Admin";
import AuthContext from "./AuthProvider";
import { accessToken } from "../../redux/actions";
import axios from "axios";
export default function Signup() {
  const usernameRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const { setAuth } = useContext(AuthContext);

  // axios post user here

  useEffect(() => {
    // usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/v1/auth/login",
        JSON.stringify({ user, password }),
        {
          headers: {
            Accept: "*/*",
            Host:"karkasjbi.uz",
            // username: `${user}`,
            // password: `${password}`,
          },
          data:{
            "username":"admin"
          }
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      setSuccess(true);
      setUser("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
    console.log(user, password);
  };

  return (
    <>
      {success ? (
        <Admin />
      ) : (
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
                autoComplete="off"
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
      )}
    </>
  );
}
