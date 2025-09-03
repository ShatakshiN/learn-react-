import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        {/* links to nested routes */}
      </nav>

      {/* child route will render here */}
      <Outlet />
    </div>
  );
}

export default DashboardLayout;