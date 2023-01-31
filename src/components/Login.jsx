import React from "react";
import AuthConsumer from "../hooks/auth";

const Login = () => {
  const [authed, dispatch] = AuthConsumer();
  return (
    <div>
      <h1>This is the Login Page</h1>
      <button
        className="border px-5 bg-indigo-500 text-gray-50 rounded"
        onClick={() => {
          dispatch({ type: "login" });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
