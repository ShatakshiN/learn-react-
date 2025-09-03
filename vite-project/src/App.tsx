import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/employeeProject/NavBar/navbar";
import Home from "./components/employeeProject/home";
import Employees from "./components/employeeProject/employee";
import EmployeeDetails from "./components/employeeProject/empDetails";

// Layout component with Navbar + Outlet
function RootLayout() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <Outlet /> {/* Child pages go here */}
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Parent layout
    children: [
      { index: true, element: <Home /> }, // default "/"
      { path: "employees", element: <Employees /> }, // "/employees"
      { path: "employees/:id", element: <EmployeeDetails /> }, // "/employees/1"
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
