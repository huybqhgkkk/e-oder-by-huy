import { Navigate, Route, Routes } from "react-router-dom";
import {
  AuthLayout,
  ClientLayout,
  DefaultLayout,
  AdminLayout,
} from "../layouts";
import {
  allAuthFlattedRoutes,
  clientPublicFlattedRoutes,
  clientProtectedFlattedRoutes,
  allAdminFlattedRoutes,
  allBlankFlattedRoutes,
} from "./index";
import { useSelector } from "react-redux";

const AllRoutes = (props) => {
  const role = useSelector((state) => state.auth.role);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      {allBlankFlattedRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={<DefaultLayout {...props}>{route.element}</DefaultLayout>}
        />
      ))}

      {allAuthFlattedRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={<AuthLayout {...props}>{route.element}</AuthLayout>}
        />
      ))}

      {clientPublicFlattedRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={<ClientLayout {...props}>{route.element}</ClientLayout>}
        />
      ))}

      {clientProtectedFlattedRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={
            isAuthenticated && role === "ROLE_USER" ? (
              <ClientLayout {...props}>{route.element}</ClientLayout>
            ) : (
              <Navigate to="/auth/login" />
            )
          }
        />
      ))}

      {allAdminFlattedRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={
            isAuthenticated && role === "ROLE_MANAGER" ? (
              <AdminLayout {...props}>{route.element}</AdminLayout>
            ) : (
              <Navigate to="/auth/login" />
            )
          }
        />
      ))}
    </Routes>
  );
};

export default AllRoutes;
