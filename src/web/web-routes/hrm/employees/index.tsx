import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "@components/dashboard/default";
import EmployeeProfile from "@web/web-pages/hrm/employee/employee-detail";
import Employees from "@web/web-pages/hrm/employee/employee";

const EmployeesLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Employees />} />
      <Route path="/:id" element={<EmployeeProfile />} />
      <Route path="/:id/edit" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
  );
};

export default EmployeesLayout;
