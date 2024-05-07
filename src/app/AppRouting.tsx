import { Routes, Route, Navigate } from "react-router-dom";
import { RouteConfig } from "./shared/models/route-config";
import { Dashboard, Docs } from "./pages";

export default function AppRouting() {
  const routes: RouteConfig[]  = [
    {
      path: "*",
      component: Navigate,
      to: "/dashboard"
    },
    {
      path: "/not-found",
      component: Navigate,
      to: "/dashboard"
    },
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/docs",
      component: Docs,
    }
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<route.component {...(route.to ? { to: route.to } : {})} />}
        />
      ))}
    </Routes>
  );
};