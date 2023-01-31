import { useNavigate } from "react-router-dom";
import AuthConsumer from "../hooks/auth";

const Dashboard = () => {
  const [, dispatch] = AuthConsumer();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        className="border px-5 bg-indigo-500 text-gray-50 rounded"
        onClick={() => {
          dispatch({ type: "logout" });
          navigate("/login", { replace: true });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
