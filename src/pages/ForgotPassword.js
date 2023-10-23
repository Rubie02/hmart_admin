import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center">
          Please enter your register email to get reset password mail.
        </p>
        <form action="">
          <CustomInput type="password" label="Email Address" id="email" />
          <div className="mb-3 text-end">
            <Link to="/" className="">
              Already have an account?
            </Link>
          </div>

          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;