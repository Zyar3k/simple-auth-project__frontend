import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

import AuthConsumer from "../hooks/auth";

const Home = () => {
  const [authed] = AuthConsumer();
  console.log(authed);
  return (
    <main>
      <h1 className="text-center my-3 bg-yellow-400 text-gray-500 w-40 mx-auto rounded">
        Authentication
      </h1>
      <Nav></Nav>
      <div className="flex justify-center text-center py-3">
        <Outlet></Outlet>
      </div>
    </main>
  );
};

export default Home;
