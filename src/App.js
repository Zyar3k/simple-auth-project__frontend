import { Route, Routes } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h2>Home</h2>}></Route>
      <Route path="/login" element={<h2>Login</h2>}></Route>
      <Route path="/dashboard" element={<h2>Dashboard</h2>}></Route>
      <Route path="/setting" element={<h2>Settings</h2>}></Route>
    </Routes>
  );
};

export default App;
