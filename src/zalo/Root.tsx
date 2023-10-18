import React from "react";
import { BrowserRouter } from "react-router-dom";

import ZaloRoutes from "@zalo/routes";
import { App, SnackbarProvider, ZMPRouter } from "zmp-ui";

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
    <App>
      <SnackbarProvider>
        <ZMPRouter>
          <ZaloRoutes />
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};

export default ZaloRoot;
