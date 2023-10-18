import React from "react";

import Main from "./Main";
import { App as AppContainer, SnackbarProvider, ZMPRouter } from "zmp-ui";
import ZaloRoutes from "./routes";

const App = () => {
  return (
    <Main>
      <AppContainer>
        <SnackbarProvider>
          <ZMPRouter>
            <ZaloRoutes />
          </ZMPRouter>
        </SnackbarProvider>
      </AppContainer>
    </Main>
  );
};

export default App;
