import React, { useContext } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useConfig } from '@atom/config/useConfig';

const renderTooltip = props => (
  <Tooltip style={{ position: 'fixed' }} id="button-tooltip" {...props}>
    Toggle Navigation
  </Tooltip>
);

const ToggleButton = () => {

  const {config, setConfig} = useConfig();

  const handleClick = () => {
    document
      .getElementsByTagName('html')[0]
      .classList.toggle('navbar-vertical-collapsed');
    setConfig({...config, isNavbarVerticalCollapsed: !config.isNavbarVerticalCollapsed});
  };

  return (
    <OverlayTrigger
      placement={
        config.isFluid ? (config.isRTL ? 'bottom' : 'right') : config.isRTL ? 'bottom' : 'left'
      }
      overlay={renderTooltip}
    >
      <div className="toggle-icon-wrapper">
        <Button
          variant="link"
          className="navbar-toggler-humburger-icon navbar-vertical-toggle"
          id="toggleNavigationTooltip"
          onClick={handleClick}
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </Button>
      </div>
    </OverlayTrigger>
  );
};

export default ToggleButton;
