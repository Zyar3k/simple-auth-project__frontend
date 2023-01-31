import { createContext, useContext, useReducer } from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const initialState = { auth: false };

const authContext = createContext(initialState);

export function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { auth: true };
    case "logout":
      return { auth: false };

    default:
      throw new Error();
  }
}

export function AuthProvider({ children }) {
  const [authed, dispatch] = useReducer(reducer, initialState);
  return (
    <authContext.Provider value={[authed, dispatch]}>
      {children}
    </authContext.Provider>
  );
}

export default function AuthConsumer() {
  return useContext(authContext);
}

export function RequireAuth({ children }) {
  const [authed] = AuthConsumer();
  const location = useLocation();
  return authed.auth === true ? (
    children
  ) : (
    <Navigate
      to={"/login"}
      replace
      state={{ path: location.pathname }}
    ></Navigate>
  );
}
