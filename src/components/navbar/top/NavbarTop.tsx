import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import classNames from 'classnames';
import NavbarTopDropDownMenus from './NavbarTopDropDownMenus';
import TopNavRightSideNavItem from './TopNavRightSideNavItem';
import { useLocation } from 'react-router-dom';
import { useConfig } from '@atom/config/useConfig';

const NavbarTop = () => {
  
  const {config, setConfig} = useConfig();

  const { pathname } = useLocation();
  const isChat = pathname.includes('chat');

  const [showDropShadow, setShowDropShadow] = useState(false);

  const handleBurgerMenu = () => {
    (config.navbarPosition === 'top' || config.navbarPosition === 'double-top') &&
      setConfig({...config, navbarCollapsed: !config.navbarCollapsed});
    (config.navbarPosition === 'vertical' || config.navbarPosition === 'combo') &&
      setConfig({...config, showBurgerMenu: !config.showBurgerMenu});
  };

  const setDropShadow = () => {
    const el = document.documentElement;
    if (el.scrollTop > 0) {
      setShowDropShadow(true);
    } else {
      setShowDropShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setDropShadow);
    return () => window.removeEventListener('scroll', setDropShadow);
  }, []);

  const burgerMenuRef = useRef();

  return (
    <Navbar
      className={classNames('navbar-glass fs--1 navbar-top sticky-kit', {
        // 'navbar-glass-shadow': showDropShadow
        'navbar-glass-shadow': showDropShadow && !isChat
      })}
      expand={
        config.navbarPosition === 'top' ||
        config.navbarPosition === 'combo' ||
        config.navbarPosition === 'double-top'
          ? config.topNavbarBreakpoint
          : true
      }
    >
      {config.navbarPosition === 'double-top' ? (
        <div className="w-100">
          <div className="d-flex flex-between-center">
            <NavbarTopElements
              navbarCollapsed={config.navbarCollapsed}
              navbarPosition={config.navbarPosition}
              handleBurgerMenu={handleBurgerMenu}
              burgerMenuRef={burgerMenuRef}
            />
          </div>
          <hr className="my-2 d-none d-lg-block" />
          <Navbar.Collapse in={config.navbarCollapsed} className="scrollbar py-2">
            <Nav navbar>
              <NavbarTopDropDownMenus />
            </Nav>
          </Navbar.Collapse>
        </div>
      ) : (
        <NavbarTopElements
          navbarCollapsed={config.navbarCollapsed}
          navbarPosition={config.navbarPosition}
          handleBurgerMenu={handleBurgerMenu}
          burgerMenuRef={burgerMenuRef}
        />
        
      )}
    </Navbar>
  );
};

const NavbarTopElements = ({
  navbarPosition,
  handleBurgerMenu,
  navbarCollapsed
}) => {
 
  return (
    <>
      <TopNavRightSideNavItem />
    </>
  );
};

NavbarTopElements.propTypes = {
  navbarPosition: PropTypes.string,
  handleBurgerMenu: PropTypes.func,
  navbarCollapsed: PropTypes.bool
};
export default NavbarTop;
