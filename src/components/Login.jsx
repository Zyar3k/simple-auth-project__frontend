import React from "react";
import { useNavigate } from "react-router-dom";
import AuthConsumer from "../hooks/auth";

const Login = () => {
  const [authed, dispatch] = AuthConsumer();
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is the Login Page</h1>
      <button
        className="border px-5 bg-indigo-500 text-gray-50 rounded"
        onClick={() => {
          dispatch({ type: "login" });
          navigate("/dashboard", { replace: true });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
