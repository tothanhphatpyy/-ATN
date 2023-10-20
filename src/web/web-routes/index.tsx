import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import SplitLogin from "@components/authentication/split/Login";
import DashboardLayout from "@web/web-routes/dashboard";
import HRMLayout from "@web/web-routes/hrm";
import PrivateRoute from "@web/web-routes/PrivateRoute";

const WebRoutes = () => {
  return (
    <Routes>
      {/* <Route element={<PrivateRoute />}> */}
        <Route path="/*" element={<DashboardLayout />} />
        <Route path="/account/*" element={<HRMLayout />} />
      {/* </Route> */}
      <Route path="/login" element={<SplitLogin />} />
      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
  );
};

export default WebRoutes;
