import React from "react";
import { BrowserRouter } from "react-router-dom";

import ZaloRoutes from "@zalo/routes";

declare const window: any;

const ZaloRoot = () => {
  /* if (getSystemInfo().platform === "android") {
    const androidSafeTop = Math.round(
      (window as any).ZaloJavaScriptInterface.getStatusBarHeight() /
        window.devicePixelRatio
    );
    document.body.style.setProperty(
      "--zaui-safe-area-inset-top",
      `${androidSafeTop}px`
    );
  } */

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
