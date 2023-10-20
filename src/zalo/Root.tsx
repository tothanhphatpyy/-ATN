import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import { CloseButton } from "@components/common/Toast";
import ZaloRoutes from "@zalo/routes";

declare const window: any;

const ZaloRoot = () => {
  return (
    <BrowserRouter
      basename={
        process.env.NODE_ENV === "production" ? `/zapps/${window.APP_ID}` : ""
      }
    >
      <ZaloRoutes />
      <ToastContainer
        closeButton={CloseButton}
        icon={false}
        position={toast.POSITION.BOTTOM_LEFT}
      />
    </BrowserRouter>
  );
};

export default ZaloRoot;
