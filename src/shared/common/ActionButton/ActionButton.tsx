import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

interface ActionButtonProps {
  placement?: 'top' | 'bottom' | 'left' | 'right';
  title: string;
  icon: IconDefinition;
}

const ActionButton: React.FC<ActionButtonProps> = ({ placement = 'top', title, icon, ...rest }) => {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={<Tooltip style={{ position: 'fixed' }}>{title}</Tooltip>}
    >
      <Button {...rest}>
        <FontAwesomeIcon icon={icon} />
      </Button>
    </OverlayTrigger>
  );
};

export default ActionButton;