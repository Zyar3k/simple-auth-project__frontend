import AuthConsumer from "../hooks/auth";

const Dashboard = () => {
  const [authed, dispatch] = AuthConsumer();
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        className="border px-5 bg-indigo-500 text-gray-50 rounded"
        onClick={() => {
          dispatch({ type: "logout" });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
