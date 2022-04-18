import React from "react";
import { SignUpWrapper } from "../../styles";
import { useForm } from "react-hook-form";
export default function Signup() {
  return (
    <SignUpWrapper className="col-md-6 col-sm-8 col-xs-8 col-lg-6 col-xl-4  col-8">
      <h1 className="text-center"> Log in</h1>
      <form action="#" className="w-100">
      
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
            placeholder="• • • • • • • • •"
          />
        </div>
        <button type="submit" className="submitBtn btn btn-success">
          Submit
        </button>
      </form>
    </SignUpWrapper>
  );
}
