import { RequireAuth } from "../hooks/auth";

import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import HomeContent from "../components/HomeContent";
import Login from "../components/Login";
import Settings from "../components/Settings";

export default [
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
        RouteName: "Login",
        protected: false,
      },
      {
        path: "/settings",
        element: (
          <RequireAuth>
            <Settings />
          </RequireAuth>
        ),
        RouteName: "Settings",
        protected: true,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
        RouteName: "Dashboard",
        protected: true,
      },
    ],
  },
];
