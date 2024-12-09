
import { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import FallbackLoading from "./components/loader/FallbackLoading";
import { publicRoutes, privateRoutes, semiPrivateRoute } from "./routes";
import ForgotPassword from "../src/components/resetPassword/forgotPassword"

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import SemiPrivateRoute from "./SemiPrivateRoute";
import SignIn from "./pages/SignIn";
import ResetPasswordRedirect from "./components/resetPassword/ResetpasswordRedirect";

import { requestFCMToken, listenForMessages } from "./firebase";

const AdminPanel = lazy(() => import("./pages/AdminPanel"));
const AdminSignIn = lazy(() => import("./pages/AdminSignIn"));

const App = () => {
   const userData = useSelector((state) => state.auth?.userData);
   const  userId = userData?._id
  
  useEffect(() => {
    requestFCMToken(userId); // Request FCM token for the logged-in user
    listenForMessages(); // Listen for foreground messages
  }, [userId]);

  const adminAccessToken = JSON.parse(
    localStorage.getItem("admin")
  )?.accessToken;

  return (
    <Suspense fallback={<FallbackLoading />}>
      <Routes>

        <Route element={<SemiPrivateRoute userData={userData} />}>
          {semiPrivateRoute.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route element={<PrivateRoute userData={userData} />}>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route element={<PublicRoute />}>
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route
          path="/signin"
          element={userData ? <Navigate to="/" /> : <SignIn />}
        />

        <Route path="/forgot-password"
          element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPasswordRedirect />} />

        <Route
          path="/admin/signin"
          element={
            adminAccessToken ? <Navigate to="/admin" /> : <AdminSignIn />
          }
        />

        <Route
          path="/admin"
          element={
            adminAccessToken ? <AdminPanel /> : <Navigate to="/admin/signin" />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;
