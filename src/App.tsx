import React, { useEffect, useState } from "react";

import ZaloRoot from "@zalo/Root";
import Main from "./Main";

const App = () => {
  return (
    <Main>
      <ZaloRoot />
    </Main>
  );
};

export default App;
