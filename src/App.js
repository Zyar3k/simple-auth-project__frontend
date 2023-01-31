import { useRoutes } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Settings from "./components/Settings";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <div>Home Content</div>,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return routes;
};

export default App;
