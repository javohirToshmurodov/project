import React from "react";
import { SignUpWrapper } from "../../styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const navigate = useNavigate();
  return (
    <SignUpWrapper>
      <h1 className="text-center">Sign in</h1>
      <form action="#" className="w-100">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            required
            placeholder="Example@gmail.com"
          />
        </div>
        <div className="mb-3">
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
          Sign in
        </button>
      </form>
    </SignUpWrapper>
  );
}
