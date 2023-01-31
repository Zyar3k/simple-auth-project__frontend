import { useRoutes } from "react-router-dom";
import { RequireAuth } from "./hooks/auth";

import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import HomeContent from "./components/HomeContent";
import Login from "./components/Login";
import Settings from "./components/Settings";

import "./App.css";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <HomeContent />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/settings",
          element: (
            <RequireAuth>
              <Settings />
            </RequireAuth>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          ),
        },
      ],
    },
  ]);
  return routes;
};

export default App;
