import React from "react";
import polygrid from "./polygrid.png";

const Login = (): JSX.Element => {
  return (
    <div className="flex bg-pink-100 items-center justify-center">
      <div className="flex-1 bg-[#071A28] text-white">Login Page</div>
      <div className="hidden lg:flex">
        <img src={polygrid} alt="loginImage" className="object-cover w-96" />
      </div>
    </div>
  );
};

export default Login;
