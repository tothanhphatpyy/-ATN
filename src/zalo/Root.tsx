import React from "react";
import { BrowserRouter } from "react-router-dom";

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
    </BrowserRouter>
  );
};

export default ZaloRoot;
