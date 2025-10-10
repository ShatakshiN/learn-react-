import  { Suspense, lazy} from "react";
import type { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Signup = lazy(() => import("../pages/signUp"));
const Login = lazy(() => import("../pages/login"));
const NotFound = lazy(() => import("../pages/notFound"));
const UserProfile = lazy(() => import("../pages/userProfile"));

interface PrivateRouteProps {
  children: ReactNode; 
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem("token");

  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />          
        <Route
          path="/userProfile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Navigate to="/signup" replace />} />  

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
