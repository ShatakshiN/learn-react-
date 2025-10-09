import  { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Signup = lazy(() => import("../pages/signUp"));
const Login = lazy(() => import("../pages/login"));
const NotFound = lazy(() => import("../pages/notFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Navigate to="/signup" replace />} />  

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
