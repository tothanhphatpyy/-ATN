import HeaderFilter from "@components/header/header-homepage/HeaderFilter";
import React, { useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "zmp-ui";
import HeaderInside from "@components/header/header-page-inside/HeaderInside";

export const NO_HEADER_PAGES = ["/dashboard"];

const HeaderLayout = () => {
  const { pathname } = useLocation();

  const noHeaderPage = useMemo(() => {
    console.log(NO_HEADER_PAGES.includes(pathname));
    return NO_HEADER_PAGES.includes(pathname);
  }, [pathname]);

  console.log(noHeaderPage);

  const renderHeader = useMemo(() => {
    return pathname == "/" ? <HeaderFilter /> : <HeaderInside />;
  }, [pathname]);

  return (
    <div>
      {!noHeaderPage && <Header showBackIcon={false} title={renderHeader} />}
      <div className="pt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default React.memo(HeaderLayout);
