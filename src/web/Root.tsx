import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import { CloseButton } from "@components/common/Toast";
import WebRoutes from "@web/web-routes";

const WebRoot = () => {
  return (
    <BrowserRouter>
     <WebRoutes />
    </BrowserRouter>
  );
};

export default WebRoot;
