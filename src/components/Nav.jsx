import React from "react";
import { NavLink } from "react-router-dom";
import AuthConsumer from "../hooks/auth";

import Route from "../routes/route";

const Nav = () => {
  const [{ auth }] = AuthConsumer();
  let [{ children }] = Route;
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
      {children.map((value, index) =>
        value.RouteName && value.protected === auth ? (
          <ActiveLink key={index} to={value.path}>
            {value.RouteName}
          </ActiveLink>
        ) : (
          false
        )
      )}
    </nav>
  );
};

export default Nav;
