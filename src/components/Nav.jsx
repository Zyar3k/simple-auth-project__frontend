import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  function ActiveLink(props) {
    return (
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "#1d2d44" : "",
          };
        }}
        {...props}
      />
    );
  }
  return (
    <nav className="flex bg-indigo-500 text-gray-50 gap-4 justify-center">
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/login">Login</ActiveLink>
      <ActiveLink to="/dashboard">Dashboard</ActiveLink>
      <ActiveLink to="/settings">Settings</ActiveLink>
    </nav>
  );
};

export default Nav;
