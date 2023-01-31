import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex bg-indigo-500 text-gray-50 gap-4 justify-center">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
};

export default Nav;
