import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useConfig } from '@atom/config/useConfig';

const NavbarNavLink = ({ title, route }) => {
  const {config, setConfig} = useConfig();

  const handleClick = () => {
    if (config.navbarCollapsed) {
      setConfig({...config, navbarCollapsed: !config.navbarCollapsed});
    }
    if (config.showBurgerMenu) {
      setConfig({...config, showBurgerMenu: !config.showBurgerMenu});
    }
  };
  return (
    <Nav.Link
      as={title ? 'p' : Link}
      className={classNames('fw-medium', {
        'text-500': !route?.active,
        'text-700 mb-0 fw-bold': title,
        'py-1': !title,
        'link-600': !title && route?.active
      })}
      to={route?.to}
      onClick={handleClick}
    >
      {title ? title : route.name}
    </Nav.Link>
  );
};

NavbarNavLink.propTypes = {
  title: PropTypes.string,
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    active: PropTypes.bool
  })
};

export default NavbarNavLink;
