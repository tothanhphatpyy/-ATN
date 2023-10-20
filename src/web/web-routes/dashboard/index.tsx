import Dashboard from "@components/dashboard/default";
import MainLayout from "@layouts/MainLayout";
import React from "react";
import { Route, Routes } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default DashboardLayout;
