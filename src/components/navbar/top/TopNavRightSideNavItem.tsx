import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartNotification from '@components/navbar/top/CartNotification';
import NotificationDropdown from '@components/navbar/top/NotificationDropdown';
import ProfileDropdown from '@components/navbar/top/ProfileDropdown';
import React, { useContext, useState } from 'react';
import { Nav, OverlayTrigger, Tooltip, NavDropdown } from 'react-bootstrap';
import NineDotMenu from './NineDotMenu';
import { handleLocale, localeDefault } from '@helpers/config/locale';
import { useConfig } from '@atom/config/useConfig';

const TopNavRightSideNavItem = () => {

  const [locale, setLocale] = useState(localeDefault());
  const {config, setConfig} = useConfig();
  return (
    <Nav
      navbar
      className="navbar-nav-icons ms-auto flex-row align-items-center"
      as="ul"
    >
      <NavDropdown title={`${locale}`} id="navbarScrollingDropdown">
        <div className='py-2 bg-light rounded-3'>
          <NavDropdown.Item onClick={() => {handleLocale('vi'); setLocale('Tiếng Việt')}}>Tiếng Việt</NavDropdown.Item>
          <NavDropdown.Item onClick={() => {handleLocale('en'); setLocale('English')}}>English</NavDropdown.Item>
        </div>
      </NavDropdown>
      <Nav.Item as={'li'}>
        <Nav.Link
          className="px-2 theme-control-toggle"
          onClick={() => {
            setConfig({...config, isDark: !config.isDark })
            localStorage.setItem("isDark", JSON.stringify(!config.isDark));
          }}
        >
          <OverlayTrigger
            key="left"
            placement={config.isRTL ? 'bottom' : 'left'}
            overlay={
              <Tooltip style={{ position: 'fixed' }} id="ThemeColor">
                {config.isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              </Tooltip>
            }
          >
            <div className="theme-control-toggle-label">
              <FontAwesomeIcon
                icon={config.isDark ? 'sun' : 'moon'}
                className="fs-0"
              />
            </div>
          </OverlayTrigger>
        </Nav.Link>
      </Nav.Item>

      {/* <CartNotification />
      <NotificationDropdown /> */}
    </Nav>
  );
};

export default TopNavRightSideNavItem;
