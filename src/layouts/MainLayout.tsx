import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import NavbarTop from '@components/navbar/top/NavbarTop';
import { useConfig } from '@atom/config/useConfig';

const MainLayout = () => {
  const { hash, pathname } = useLocation();
  const isKanban = pathname.includes('kanban');
  // const isChat = pathname.includes('chat');

  const { config } = useConfig();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={config.isFluid ? 'container-fluid' : 'container'}>
      {/* {(config.navbarPosition === 'vertical' || config.navbarPosition === 'combo') && (
        <NavbarVertical />
      )} */}
      {/* <ProductProvider> */}
        {/* <CourseProvider> */}
          <div className={classNames('content', { 'pb-0': isKanban })}>
            <NavbarTop />
            {/*------ Main Routes ------*/}
            {/* <Outlet />
            {!isKanban && <Footer />} */}
          </div>
        {/* </CourseProvider> */}
      {/* </ProductProvider> */}
    </div>
  );
};

export default MainLayout;
